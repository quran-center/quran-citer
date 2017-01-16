var qrnCiter = (function (style) {

  var res = {};

  function closeDiv() {
    var div = document.getElementById('light');
    div.style.display = 'none';
    document.getElementById('fade').style.display = 'none';
    div.innerHTML = '';
    document.body.style.overflow = 'auto';
  }


  function putScriptInIframes(sid, aid, eid) {
    var scriptUrl = 'http://www.recitequran.com/embed.php?ColorText=1&wpx=560&Translations=VRussian&Ch=' + sid + '&SV=' + aid + '&EV=' + (eid || aid);

    var frame = document.createElement('iframe');
    var html = '<style>body > div{width:100% !important;border-right:10px !important;}</style><body style="margin:0px;padding:0px;"><script src="' + scriptUrl + '" ><\/script></body>';
    frame.id = "qframe";
    frame.src = 'data:text/html;charset=utf-8,' + encodeURI(html);
    frame.width = "100%";
    frame.height = "100%";
    frame.padding = 0;
    frame.border = 0;
    frame.style = "overflow:hidden;height:100%;width:100%";
    frame.setAttribute('frameborder', 0);
    var div = document.getElementById("light");
    div.appendChild(frame);
    document.getElementById('light').style.display = 'block';
    document.getElementById('fade').style.display = 'block';
    document.body.style.overflow = 'hidden';
  }


  function scanLinks() {

    var
      linkFormats = {
        "rq": ["http://www.recitequran.com/", ":", ""],
        "rqru": ["http://www.recitequran.com/ru/", ":", ""],
        "rqaz": ["http://www.recitequran.com/az/", ":", ""],
        "rqs": [null, "", ""],
        "tanzil": ["http://tanzil.net/#", ":", ""],
        "quran": ["http://quran.com/", "?", ""],
        "qi": ["http://al-quran.info/#", ":", ""],
        "qf": ["http://www.quranflash.com/verse/", "/", ""],
        "quraz1": ["http://quran.az/5", "/", "/t:3"],
        "quraz2": ["http://quran.az/5", "/", "/t:2"],
        "quraz3": ["http://quran.az/5", "/", "/t:3"],

      },
      x = document.getElementsByClassName("qrn"),
      i = 0;
    for (i = 0; i < x.length; i++) {
      var y = x[i];
      //y.style.backgroundColor = "yellow";
      var links = y.getElementsByTagName("a"),
        linkFormat = linkFormats[y.getAttribute("data-qlink") || style];

      if (links.length > 0) {
        var link = links[links.length - 1];
        var nums = link.text.match(/\d+/g);
        if (linkFormat[0]) {
          link.href = linkFormat[0] + nums[0] + linkFormat[1] + nums[1] + linkFormat[2];
          link.target = "_blank";
          y.cite = link.href;
        } else {
          link.href = "javascript:void(0)";
          var sid = nums[0],
            aid = nums[1],
            eid = nums.length > 2 ? nums[2] : nums[1];
          link.onclick = putScriptInIframes.bind(this, sid, aid, eid);
          //  link.href = 'http://www.recitequran.com/embed.php?ColorText=1&wpx=560&Translations=VRussian&Ch=' + sid + '&SV=' + aid + '&EV=' + (eid || aid);
          // link.classList.add("qrciter-popup-link");
        }

      }
    }

  }

  function createDivs() {
    var div1 = document.createElement('div');
    div1.id = "light";
    div1.className = "white_content";
    document.body.appendChild(div1);

    var div2 = document.createElement('div');
    div2.id = "fade";
    div2.className = "black_overlay";
    div2.onclick = closeDiv;
    document.body.appendChild(div2);
    var divhtml = '<div id="light" class="white_content"><a href = "javascript:void(0)" onclick = "closeDiv()"></a></div><div id="fade" class="black_overlay" onclick = "closeDiv()"></div>';


    var closeBtn = document.createElement('a');
    closeBtn.innerHTML = '&times;';
    closeBtn.className = 'qframe-close-btn';
    closeBtn.setAttribute('href', '#');
    closeBtn.addEventListener('click', closeDiv);

    div2.appendChild(closeBtn);
  }

  /*function callMe(){
	 console.log(this);
	 return "hello";
  }*/

  res.initialise = function () {
    /*	$(document).ready(function() {
    		 console.log("LA ILAHE ILLELLAH");
    		$('.qrciter-popup-link').magnificPopup({
    			type: 'inline',
    			src: '<div>HTML string</div>'
    		});
    	});
    */
    scanLinks();
    createDivs();
  }

  res.initialise();

  return res;

}("rq"))