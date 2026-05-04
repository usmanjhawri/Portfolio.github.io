const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = process.cwd();
const dist = path.join(root, "dist");
const imageOutputDir = path.join(dist, "assets", "project-images", "site");
const downloadOutputDir = path.join(dist, "assets", "downloads");
const generatedImagePaths = new Map();

const copyFile = (from, to) => {
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.copyFileSync(from, to);
};

const copyDir = (from, to) => {
  if (!fs.existsSync(from)) return;
  fs.mkdirSync(to, { recursive: true });
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const sourcePath = path.join(from, entry.name);
    const targetPath = path.join(to, entry.name);
    if (entry.isDirectory()) {
      copyDir(sourcePath, targetPath);
    } else {
      copyFile(sourcePath, targetPath);
    }
  }
};

const decodeProjectImages = () => {
  const sourceDir = path.join(root, "image-data");
  fs.mkdirSync(imageOutputDir, { recursive: true });

  if (!fs.existsSync(sourceDir)) {
    const localImageDir = path.join(root, "assets", "project-images", "site");
    copyDir(localImageDir, imageOutputDir);
    for (const file of fs.readdirSync(localImageDir)) {
      if (file.endsWith(".jpg")) {
        const id = file.replace(/\.jpg$/, "");
        const outputName = `${id}.webp`;
        copyFile(path.join(localImageDir, file), path.join(imageOutputDir, outputName));
        generatedImagePaths.set(id, `assets/project-images/site/${outputName}`);
      }
    }
    return;
  }

  const extensionByMime = {
    jpeg: "jpg",
    jpg: "jpg",
    png: "png",
    webp: "webp"
  };

  for (const file of fs.readdirSync(sourceDir).filter((name) => name.endsWith(".js"))) {
    const source = fs.readFileSync(path.join(sourceDir, file), "utf8");
    const match = source.match(/\['([^']+)'\]\s*=\s*'data:image\/([^;]+);base64,([^']+)'/);
    if (!match) {
      throw new Error(`Could not read project image data from ${file}`);
    }

    const [, id, mime, encoded] = match;
    const extension = extensionByMime[mime];
    if (!extension) {
      throw new Error(`Unsupported image type "${mime}" in ${file}`);
    }

    const outputName = `${id}.${extension}`;
    fs.writeFileSync(path.join(imageOutputDir, outputName), Buffer.from(encoded, "base64"));
    generatedImagePaths.set(id, `assets/project-images/site/${outputName}`);
  }
};

const decodeCv = () => {
  fs.mkdirSync(downloadOutputDir, { recursive: true });
  const outputPath = path.join(downloadOutputDir, "Muhammad_Usman_Yousaf_CV.pdf");
  const chunkDir = path.join(root, "cv-data", "original-cv");

  if (fs.existsSync(chunkDir)) {
    const encoded = fs.readdirSync(chunkDir)
      .filter((name) => name.endsWith(".txt"))
      .sort()
      .map((name) => fs.readFileSync(path.join(chunkDir, name), "utf8").trim())
      .join("");
    fs.writeFileSync(outputPath, Buffer.from(encoded, "base64"));
    return;
  }

  const localCv = path.join(root, "assets", "downloads", "Muhammad_Usman_Yousaf_CV.pdf");
  if (fs.existsSync(localCv)) {
    copyFile(localCv, outputPath);
    return;
  }

  const cvSource = path.join(root, "cv-data", "cv.js");
  if (!fs.existsSync(cvSource)) {
    throw new Error("No CV source found.");
  }

  const context = { window: {} };
  vm.runInNewContext(fs.readFileSync(cvSource, "utf8"), context);
  const encoded = context.window.cvChunks.join("");
  fs.writeFileSync(outputPath, Buffer.from(encoded, "base64"));
};

const validateOutput = () => {
  const context = {};
  const source = fs.readFileSync(path.join(dist, "projects.js"), "utf8");
  vm.runInNewContext(`${source}; this.portfolioData = portfolioData;`, context);
  const data = context.portfolioData;

  if (!Array.isArray(data.downloads) || data.downloads.length !== 1) {
    throw new Error("Expected exactly one downloadable file: the CV.");
  }

  for (const project of data.projects) {
    const imagePath = path.join(dist, project.image);
    if (!fs.existsSync(imagePath)) {
      throw new Error(`Missing generated project image: ${project.image}`);
    }
  }

  for (const download of data.downloads) {
    const downloadPath = path.join(dist, download.href);
    if (!fs.existsSync(downloadPath)) {
      throw new Error(`Missing generated download: ${download.href}`);
    }
  }

  const downloads = fs.readdirSync(downloadOutputDir);
  if (downloads.length !== 1 || downloads[0] !== "Muhammad_Usman_Yousaf_CV.pdf") {
    throw new Error("Only the CV should be published as a downloadable file.");
  }
};

const buildIndex = () => {
  const source = fs.readFileSync(path.join(root, "index.html"), "utf8")
    .replace(/^\s*<script src="image-data\/[^"]+"><\/script>\r?\n/gm, "")
    .replace(/^\s*<script src="cv-data\/cv\.js"><\/script>\r?\n/gm, "");
  fs.writeFileSync(path.join(dist, "index.html"), source);
};

const buildStyles = () => {
  const heroImage = generatedImagePaths.get("soil-sampling-ugv") || "assets/project-images/site/soil-sampling-ugv.jpg";
  const source = fs.readFileSync(path.join(root, "styles.css"), "utf8")
    .replace(/assets\/project-images\/site\/portfolio-hero\.jpg/g, heroImage);
  fs.writeFileSync(path.join(dist, "styles.css"), source);
};

const buildProjectData = () => {
  let source = fs.readFileSync(path.join(root, "projects.js"), "utf8");
  for (const [id, imagePath] of generatedImagePaths) {
    const imageExpression = new RegExp(`image:\\s*window\\.projectImages\\["${id}"\\]`, "g");
    source = source.replace(imageExpression, `image: "${imagePath}"`);
    source = source.replace(new RegExp(`assets/project-images/site/${id}\\.svg`, "g"), imagePath);
    source = source.replace(new RegExp(`assets/project-images/site/${id}\\.jpg`, "g"), imagePath);
  }
  source = source.replace(
    /href:\s*"data:application\/pdf;base64,"\s*\+\s*window\.cvChunks\.join\(""\)/g,
    'href: "assets/downloads/Muhammad_Usman_Yousaf_CV.pdf"'
  );
  fs.writeFileSync(path.join(dist, "projects.js"), source);
};

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

decodeProjectImages();
decodeCv();
buildIndex();
buildStyles();
buildProjectData();
copyFile(path.join(root, "script.js"), path.join(dist, "script.js"));
validateOutput();

console.log("Built static portfolio in dist.");
