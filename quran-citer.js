(function(style) {

  var
    linkFormats = {
      "rq": ["http://www.recitequran.com/", ":", ""],
      "tanzil": ["http://tanzil.net/#", ":", ""],
      "quran": ["http://quran.com/", "?", ""],
      "qi": ["http://al-quran.info/#", ":", ""],
      "qf": ["http://www.quranflash.com/verse/", "/", ""],

    },
    x = document.getElementsByClassName("qrn"),
    i = 0;
  for (i = 0; i < x.length; i++) {
    var y = x[i];
    //y.style.backgroundColor = "yellow";
    var links = y.getElementsByTagName("a"),
      linkFormat = linkFormats[y.getAttribute("qlink") || style];

    if (links.length > 0) {
      var link = links[links.length - 1];
      var nums = link.text.match(/\d+/g);
      link.href = linkFormat[0] + nums[0] + linkFormat[1] + nums[1] + linkFormat[2];
      link.target = "_blank";
      y.cite = link.href;
    }
  }
}("rq"))
