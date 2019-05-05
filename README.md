# quran-citer
see more here http://husayt.github.io/quran-citer

This project allows to easily create simple links to Quran ayas on popular Quran websites.

Usage is very simple :
First, add this line to the `<head>` area  of your page 
```
<link rel="stylesheet" type="text/css" href="quran-citer.css">
```
and this to the bottom 
```
<script src="quran-citer.js" ></script>
```

Then, just add any Quran surah either in `blockquote` or `q` tags.

For example, for block mode quote use
```
<blockquote class="qrn">
  Thereby He causes many to go astray, and thereby He guides many; but thereby He
  causes none to go astray save the iniquitous} <a>(Al-Baqarah 2:26)</a>
</blockquote>
```

<blockquote class="qrn">
  Thereby He causes many to go astray, and thereby He guides many; but thereby He
  causes none to go astray save the iniquitous} <a>(Al-Baqarah 2:26)</a>
</blockquote>

or for inline

```
Всевышний сказал:
<q class="qrn"> «Я отвращу от Моих знамений тех, которые возгордились на земле без всякого права на то. Какое бы знамение они ни увидели, они не уверуют. Увидев правый путь, они не встанут на него, а завидев путь заблуждения, последуют им» <a>(сура 7 «Ограды», аят 146)</a>.</q>
```
 Всевышний сказал: <q class="qrn">«Я отвращу от Моих знамений тех, которые возгордились на земле без всякого права на то. Какое бы знамение они ни увидели, они не уверуют. Увидев правый путь, они не встанут на него, а завидев путь заблуждения, последуют им» <a>(сура 7 «Ограды», аят 146)</a></q>.


if you want to use some other quran website use `qlink` attribute.

```
<blockquote class="qrn" qlink="tanzil">
  Thereby He causes many to go astray, and thereby He guides many; but thereby He
  causes none to go astray save the iniquitous} <a>(Al-Baqarah 2:26)</a>
</blockquote>
```

Currently, these parameters supported

* `kc` : https://www.koran.center
* `rq` : http://www.recitequran.com
* `tanzil`: http://tanzil.net
* `quran`: http://quran.com
* `qi`: http://al-quran.info
* `qf`: http://www.quranflash.com/verse
