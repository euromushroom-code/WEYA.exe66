/* WEYA.exe enhance.js — add <script src="enhance.js"></script> before </body> in index.html */
(function () {
  /* ===== 1. WORKS: edit this list. Put images in assets/images/ ===== */
  var WORKS = [
    { src: "assets/images/work-01.jpg", title: "Quiet Forms",  type: "Illustration", cat: "illustration" },
    { src: "assets/images/work-02.jpg", title: "Digital Texture", type: "Pattern", cat: "pattern" },
    { src: "assets/images/work-03.jpg", title: "Material Study", type: "Visual Art", cat: "visual" },
    { src: "assets/images/work-04.jpg", title: "Raw Colour", type: "Illustration", cat: "illustration" },
    { src: "assets/images/work-05.jpg", title: "Surface Study", type: "Pattern", cat: "pattern" },
    { src: "assets/images/work-06.jpg", title: "Red Memory", type: "Visual", cat: "visual" },
    { src: "assets/images/work-07.jpg", title: "Black Line", type: "Tattoo", cat: "tattoo" },
    { src: "assets/images/work-08.jpg", title: "Fragment", type: "Illustration", cat: "illustration" },
    { src: "assets/images/work-09.jpg", title: "Afterimage", type: "Visual Art", cat: "visual" },
    { src: "assets/images/work-10.jpg", title: "Untitled 10", type: "Tattoo", cat: "tattoo" },
    { src: "assets/images/work-11.jpg", title: "Untitled 11", type: "Pattern", cat: "pattern" },
    { src: "assets/images/work-12.jpg", title: "Untitled 12", type: "Illustration", cat: "illustration" }
  ];

  var gallery = document.querySelector(".gallery");
  if (gallery) {
    gallery.innerHTML = "";
    WORKS.forEach(function (w) {
      var a = document.createElement("article");
      a.className = "work reveal visible";
      a.dataset.category = w.cat;
      a.innerHTML = '<img loading="lazy" alt="' + w.title + '" src="' + w.src + '">' +
        '<div class="work-overlay"><div class="work-title">' + w.title +
        '</div><div class="work-type">' + w.type + "</div></div>";
      a.querySelector("img").onerror = function () { a.remove(); }; // missing file = card hidden
      gallery.appendChild(a);
    });
    // rebind filter buttons to the new cards
    document.querySelectorAll(".filter-btn").forEach(function (old) {
      var btn = old.cloneNode(true);
      old.parentNode.replaceChild(btn, old);
      btn.addEventListener("click", function () {
        document.querySelectorAll(".filter-btn").forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        gallery.querySelectorAll(".work").forEach(function (c) {
          c.style.display = (btn.dataset.filter === "all" || c.dataset.category === btn.dataset.filter) ? "block" : "none";
        });
      });
    });
  }

  /* ===== 2. MUSIC: tries several file names ===== */
  var audio = document.getElementById("bgMusic");
  var status = document.getElementById("musicStatus");
  if (audio) {
    var tries = ["assets/music/song.mp3", "assets/music/ready-to-die.mp3", "assets/music/Ready-to-die.mp3", "assets/music/song.m4a"];
    var i = 0;
    audio.addEventListener("error", function () {
      i++;
      if (i < tries.length) { audio.src = tries[i]; audio.load(); }
      else if (status) status.textContent = "Upload song to assets/music/song.mp3";
    });
    audio.src = tries[0];
  }

  /* ===== 3. EXTRA DETAIL (edit the text to match you) ===== */
  var style = document.createElement("style");
  style.textContent =
    ".x-grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--line)}" +
    ".x-grid>div{padding:32px 26px;border-right:1px solid var(--line);border-bottom:1px solid var(--line)}" +
    ".x-grid h4{font-family:var(--serif);font-weight:400;font-size:26px;margin-bottom:12px}" +
    ".x-grid p,.x-faq p{font-size:13px;line-height:1.8;color:var(--text-muted)}" +
    ".x-faq details{border-bottom:1px solid var(--line);padding:22px 0}" +
    ".x-faq summary{font-family:var(--serif);font-size:24px;cursor:pointer;list-style:none}" +
    ".x-faq p{margin-top:14px;max-width:640px}" +
    "@media(max-width:800px){.x-grid{grid-template-columns:1fr}.x-grid>div{border-right:0}}";
  document.head.appendChild(style);

  function addSection(beforeId, num, title, em, html) {
    var ref = document.getElementById(beforeId);
    if (!ref) return;
    var s = document.createElement("section");
    s.className = "section";
    s.innerHTML = '<div class="section-header"><div class="section-number">' + num +
      '</div><h2 class="section-title">' + title + " <em>" + em + "</em></h2></div>" + html;
    ref.parentNode.insertBefore(s, ref);
  }

  // About: extra paragraphs
  var sig = document.querySelector(".signature");
  if (sig) {
    ["I work mostly in black line, deep red and imperfect texture. I like drawings that look hand-made even when they are digital.",
     "Clients can expect honest feedback, clear communication, and artwork that is made around their idea, not copied from a template."]
      .forEach(function (t) {
        var p = document.createElement("p");
        p.textContent = t;
        sig.parentNode.insertBefore(p, sig);
      });
  }

  addSection("commission", "04b / Details", "What's", "included.",
    '<div class="x-grid">' +
    '<div><h4>Illustration</h4><p>Starts from ฿1,000. Includes 1 sketch round and 2 revisions. Typical time: 5–10 days. Delivered as PNG (and PSD on request).</p></div>' +
    '<div><h4>Pattern design</h4><p>Priced by brief. Seamless tile plus a mockup preview. Typical time: 7–14 days.</p></div>' +
    '<div><h4>Tattoo design</h4><p>Starts from ฿1,000. Sized to body placement, delivered as line art and a stencil-ready file.</p></div>' +
    "</div>");

  addSection("contact", "07b / FAQ", "Good to", "know.",
    '<div class="x-faq">' +
    "<details><summary>How do I order?</summary><p>Use the booking form below or message me on Instagram or Facebook with your idea and references.</p></details>" +
    "<details><summary>How does payment work?</summary><p>A deposit is paid after the sketch is approved. The remainder is paid before final files are delivered.</p></details>" +
    "<details><summary>Can I change the design?</summary><p>Yes, within the included revision rounds. Extra changes can be quoted separately.</p></details>" +
    "<details><summary>Do you ship or work online?</summary><p>Digital work is delivered online anywhere. Tattoo bookings are in Thailand, and the date is confirmed after I reply.</p></details>" +
    "<details><summary>Can I use the artwork commercially?</summary><p>Personal use is included. Commercial use can be agreed before starting.</p></details>" +
    "</div>");
})();
