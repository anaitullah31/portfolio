import postcss from "postcss";
import tailwindcss from "@tailwindcss/postcss";
import fs from "fs";

const css = `
@import "tailwindcss";
@theme {
  --spacing-sm: 16px;
  --spacing-md: 32px;
}
`;

fs.writeFileSync("./test.css", css);
fs.writeFileSync("./test.html", "<div class='max-w-sm'></div>");

postcss([tailwindcss])
  .process(css, { from: "./test.css" })
  .then((result) => {
    fs.writeFileSync("./out.css", result.css);
    console.log("Compiled");
  })
  .catch((err) => console.error(err));
