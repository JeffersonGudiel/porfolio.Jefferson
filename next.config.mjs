import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias["@ui"] = path.join(__dirname, "ruta/a/ui"); // Ajusta la ruta según sea necesario
    return config;
  },
};

export default nextConfig;
