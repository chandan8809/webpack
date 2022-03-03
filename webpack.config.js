const path=require("path")

module.exports={
    entry:"./src/index.js",
    output:{
        path: path.join(__dirname,"built"),
        filename:"bundle.js"
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
      },
}