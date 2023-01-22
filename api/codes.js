const express = require("express");
const qr = require("qr-image");
const router = express.Router();

/**
 * GET product list.
 *
 * @return product list | empty.
 */
router.get("/qr", (req, res) => {
  const { url } = req.query;
  if (!url) {
    return res.status(400).send("URL is required");
  }

  const qr_png = qr.image(url, {
    type: "png",
    size: 15,
    margin: 2,
    color: {
      light: "#FFFFFF",
      dark: "#000000",
    },
  });
  res.type("png");
  qr_png.pipe(res);
});

router.get("/qrdl", (req, res) => {
  const { url } = req.query;
  if (!url) {
    return res.status(400).send("URL is required");
  }

  const qr_png = qr.image(url, {
    type: "png",
    size: 15,
    margin: 2,
    color: {
      light: "#FFFFFF",
      dark: "#000000",
    },
  });
  res.setHeader("Content-disposition", "attachment; filename=qrcode.png");
  res.type("png");
  qr_png.pipe(res);
});

module.exports = router;
