(() => {
  const STORAGE_KEY = "furniture_store_v2";
  const makePlaceholderItemImage = (title, c1, c2) =>
    `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800"><defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs><rect width="1200" height="800" fill="url(#g)"/><text x="600" y="420" text-anchor="middle" fill="#f6efe3" font-family="PingFang SC,Microsoft YaHei,sans-serif" font-size="48">${title}</text></svg>`
    )}`;

  const DEFAULT_FURNITURE_DATA = [
    {
      category: "hongmu",
      subcategory: "床榻类",
      type: "hongmu",
      name: "独板围子直腿罗汉床",
      description: "大果紫檀/线条圆润，兼具美感与舒适度。",
      detailImages:  [   // 改为数组，可以放多张
        "images/zhongshi/独板围子直腿罗汉床/微信图片_20240927091151.jpg",
        "images/zhongshi/独板围子直腿罗汉床/微信图片_20240927091147.jpg",
        "images/zhongshi/独板围子直腿罗汉床/b2db1589c8b0462dc53a208f74c5697.jpg"
      ],
      wholeImage: "images/zhongshi/独板围子直腿罗汉床/微信图片_20240927091148.jpg"
    },
    {
        category: "hongmu",
        subcategory: "床榻类",
        type: "hongmu",
        name: "花鸟纹罗汉床",
        description: "巴里黄檀/线条圆润，兼具美感与舒适度。",
        detailImages:  [   // 改为数组，可以放多张
          "images/zhongshi/花鸟纹罗汉床/微信图片_20250624154936.jpg",
          "images/zhongshi/花鸟纹罗汉床/微信图片_202506241549361.jpg",
          "images/zhongshi/花鸟纹罗汉床/微信图片_20250624154937.jpg"
        ],
        wholeImage: "images/zhongshi/花鸟纹罗汉床/微信图片_20250624154939.jpg"
    },
    {
      category: "vintage",
      subcategory: "柜架类",
      type: "vintage",
      name: "上下收纳层架",
      description: "南美柚木/结构稳固，收纳充裕，铜饰细节提升整体质感。",
      detailImages: [   // 改为数组，可以放多张
        "images/zhonggu/上下收纳层架/f4bdb65634317d9c8c18d8f30407410.jpg",
        "images/zhonggu/上下收纳层架/微信图片_20260410165229.jpg",
        "images/zhonggu/上下收纳层架/微信图片_20260410165228.jpg"
      ],
      wholeImage: "images/zhonggu/上下收纳层架/微信图片_20260410165226.jpg"
    },
    {
      category: "vintage",
      subcategory: "柜架类",
      type: "vintage",
      name: "四抽二门收纳柜",
      description: "南美柚木/温润木色沉静耐看，适合客餐厅一体空间布置。",
      detailImages: [
        "images/zhonggu/四抽二门收纳柜/微信图片_20260410165004.jpg",
        "images/zhonggu/四抽二门收纳柜/微信图片_20260410164958.jpg",
        "images/zhonggu/四抽二门收纳柜/微信图片_20260410165000.jpg"
      ],
      wholeImage: "images/zhonggu/四抽二门收纳柜/微信图片_20260410165002.jpg"
    },
    {
      category: "case",
      subcategory: "整装",
      type: "case",
      name: "湖畔雅居整装案例",
      description: "整装/客餐厅与卧室一体化设计，木作与软装统一呈现东方雅致。",
      detailImages: [
        makePlaceholderItemImage("整装案例·客厅", "#5b2f2a", "#2f3b2e"),
        makePlaceholderItemImage("整装案例·卧室", "#6b3f33", "#3f2c25")
      ],
      wholeImage: makePlaceholderItemImage("家装案例·整装", "#6a3a30", "#2f4b3d")
    },
    {
      category: "case",
      subcategory: "定制类（橱柜浴室柜）",
      type: "case",
      name: "木色定制橱柜案例",
      description: "定制类（橱柜浴室柜）/根据户型定尺打样，兼顾收纳与日常动线。",
      detailImages: [
        makePlaceholderItemImage("定制案例·橱柜", "#4a3728", "#6b4f33"),
        makePlaceholderItemImage("定制案例·浴室柜", "#3c4b58", "#2e2c38")
      ],
      wholeImage: makePlaceholderItemImage("家装案例·定制类", "#4f3b2f", "#2f3a4f")
    }
  ];
  const sectionMeta = {
    hongmu: {
      title: "红木家具",
      defaultDesc: "详情",
      defaultWhole: "图样",
      allowedSubcategories: ["桌案几类", "床榻类", "柜架类", "椅凳类", "其他"]
    },
    vintage: {
      title: "中古家具",
      defaultDesc: "详情",
      defaultWhole: "图样",
      allowedSubcategories: ["柜架类", "椅凳类", "桌台类", "其他"]
    },
    case: {
      title: "家装案例",
      defaultDesc: "案例详情",
      defaultWhole: "案例图",
      allowedSubcategories: ["整装", "定制类（橱柜浴室柜）"]
    }
  };

  const BANNER_STORAGE_KEY = "bannerImages";

  const makePlaceholderBanner = (title, c1, c2) =>
    `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900"><defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs><rect width="1600" height="900" fill="url(#g)"/><text x="800" y="475" text-anchor="middle" fill="#f5ebe0" font-family="Georgia,SimSun,serif" font-size="52">${title}</text></svg>`
    )}`;

  const DEFAULT_BANNER_IMAGES = [
    makePlaceholderBanner("红木雅韵", "#6b2d3c", "#3d1f18"),
    makePlaceholderBanner("雅居清欢", "#4a3728", "#2c2218"),
    makePlaceholderBanner("喜见东方", "#5c2430", "#1e3d2f")
  ];

  const escapeAttrUrl = (s) =>
    String(s).replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");

  const loadBannerImages = () => {
    try {
      const raw = localStorage.getItem(BANNER_STORAGE_KEY);
      if (raw == null || raw === "") return null;
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return null;
      return parsed.map((x) => String(x || "").trim()).filter(Boolean);
    } catch {
      return null;
    }
  };

  const saveBannerImages = (urls) => {
    localStorage.setItem(BANNER_STORAGE_KEY, JSON.stringify(urls));
  };

  let bannerImageUrls = (() => {
    const loaded = loadBannerImages();
    if (loaded === null) {
      const defaults = [...DEFAULT_BANNER_IMAGES];
      saveBannerImages(defaults);
      return defaults;
    }
    return loaded;
  })();

  const navLinks = Array.from(document.querySelectorAll('.nav-link[href^="#"]'));
  const header = document.querySelector(".site-header");
  const footer = document.querySelector(".site-footer");
  const sectionRoots = {
    hongmu: document.querySelector("#hongmu"),
    vintage: document.querySelector("#vintage"),
    case: document.querySelector("#case")
  };
  const activeSubcategoryByCategory = {
    hongmu: "all",
    vintage: "all",
    case: "all"
  };

  const safeText = (text) =>
    String(text || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");

  const createId = () => `${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;

  const resolveCategory = (raw) => {
    const t = String(raw || "").trim();
    if (t === "hongmu" || t === "红木家具") return "hongmu";
    if (t === "vintage" || t === "中古家具") return "vintage";
    if (t === "case" || t === "家装案例" || t === "案例") return "case";
    if (t in sectionMeta) return t;
    return "hongmu";
  };

  const resolveSubcategory = (category, raw) => {
    const list = sectionMeta[category]?.allowedSubcategories || ["其他"];
    const value = String(raw || "").trim();
    if (list.includes(value)) return value;
    return list[list.length - 1] || "其他";
  };

  const LEGACY_DEFAULT_SUBCATEGORY = {
    hongmu: "床榻类",
    vintage: "柜架类"
  };

  const normalizeItems = (items) =>
    items
      .filter(
        (item) =>
          item &&
          item.name &&
          item.description &&
          ((Array.isArray(item.detailImages) && item.detailImages.length > 0) || item.detailImage) &&
          item.wholeImage
      )
      .map((item) => ({
        category: resolveCategory(item.category ?? item.type),
        subcategory: resolveSubcategory(
          resolveCategory(item.category ?? item.type),
          item.subcategory
        ),
        id: item.id || createId(),
        type: resolveCategory(item.category ?? item.type),
        name: String(item.name).trim(),
        description: String(item.description).trim(),
        detailImages: (
          Array.isArray(item.detailImages)
            ? item.detailImages
            : item.detailImage
              ? [item.detailImage]
              : []
        )
          .map((path) => String(path || "").trim())
          .filter(Boolean),
        wholeImage: String(item.wholeImage).trim()
      }));

  const loadItems = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return normalizeItems(DEFAULT_FURNITURE_DATA);
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return normalizeItems(DEFAULT_FURNITURE_DATA);
      const hasLegacyItems = parsed.some(
        (item) => item && (!("subcategory" in item) || !String(item.subcategory || "").trim())
      );

      const migratedRaw = parsed.map((item) => {
        const category = resolveCategory(item?.category ?? item?.type);
        let subcategory = String(item?.subcategory || "").trim();
        if (!subcategory && hasLegacyItems) {
          subcategory =
            LEGACY_DEFAULT_SUBCATEGORY[category] ||
            sectionMeta[category]?.allowedSubcategories?.[0] ||
            "其他";
        }
        return {
          ...item,
          category,
          subcategory,
          type: category
        };
      });

      let normalized = normalizeItems(migratedRaw);
      if (!normalized.length) return normalizeItems(DEFAULT_FURNITURE_DATA);

      const hasCase = normalized.some((item) => item.category === "case");
      if (!hasCase) {
        const caseDefaults = normalizeItems(
          DEFAULT_FURNITURE_DATA.filter((item) => resolveCategory(item.category ?? item.type) === "case")
        ).map((item) => ({ ...item, id: createId() }));
        normalized = [...normalized, ...caseDefaults];
      }

      if (hasLegacyItems || !hasCase) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
      }

      return normalized;
    } catch (error) {
      console.warn("读取本地家具数据失败，已回退到默认数据。", error);
      return normalizeItems(DEFAULT_FURNITURE_DATA);
    }
  };

  const saveItems = (items) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  };

  let furnitureItems = loadItems();
  saveItems(furnitureItems);

  const cardTemplate = (item) => {
    const wholeCaption = safeText(sectionMeta[item.category]?.defaultWhole || "整体图");
    const thumbs = item.detailImages
      .map(
        (detailImage, index) => `
        <button
          type="button"
          class="detail-thumb"
          data-detail-index="${index}"
          aria-label="查看${safeText(item.name)}局部图 ${index + 1}"
        >
          <img src="${safeText(detailImage)}" alt="" loading="lazy">
        </button>
      `
      )
      .join("");
    return `
    <article class="furniture-card" data-item-id="${safeText(item.id)}">
      <div class="card-media">
        <figure class="image-item image-item--whole">
          <img src="${safeText(item.wholeImage)}" alt="${safeText(item.name)}整体图">
          <figcaption>${wholeCaption}</figcaption>
        </figure>
        <div class="detail-strip">
          ${thumbs}
          <button type="button" class="detail-view-btn">查看细节</button>
        </div>
      </div>
      <div class="card-content">
        <h3>${safeText(item.name)}</h3>
        <p>${safeText(item.description)}</p>
      </div>
    </article>
  `;
  };

  const renderSectionCards = (category) => {
    const root = sectionRoots[category];
    if (!root) return;
    const groupsRoot = root.querySelector(".subcategory-groups");
    if (!groupsRoot) return;
    const list = furnitureItems.filter((item) => item.category === category);
    const allowed = sectionMeta[category]?.allowedSubcategories || [];
    const current = activeSubcategoryByCategory[category] || "all";
    const active = current === "all" || allowed.includes(current) ? current : "all";
    activeSubcategoryByCategory[category] = active;
    const filteredList =
      active === "all" ? list : list.filter((item) => resolveSubcategory(category, item.subcategory) === active);
    const filterButtons = ["all", ...allowed]
      .map((sub) => {
        const isActive = sub === active;
        const label = sub === "all" ? "全部" : sub;
        return `<button type="button" class="subcategory-btn${isActive ? " is-active" : ""}" data-action="subcategory-filter" data-category="${safeText(category)}" data-subcategory="${safeText(sub)}" aria-pressed="${isActive}">${safeText(label)}</button>`;
      })
      .join("");
    groupsRoot.innerHTML = `
      <div class="subcategory-filter" aria-label="${safeText(sectionMeta[category]?.title || category)}小科目筛选">
        ${filterButtons}
      </div>
      <div class="furniture-grid">
        ${filteredList.length ? filteredList.map(cardTemplate).join("") : '<p class="subcategory-empty">当前小科目暂无数据。</p>'}
      </div>
    `;
  };

  const renderAllCards = () => {
    renderSectionCards("hongmu");
    renderSectionCards("vintage");
    renderSectionCards("case");
  };

  const setupSubcategoryFilters = () => {
    Object.entries(sectionRoots).forEach(([category, root]) => {
      if (!root) return;
      root.addEventListener("click", (event) => {
        const target = event.target;
        if (!(target instanceof HTMLElement)) return;
        const btn = target.closest('[data-action="subcategory-filter"]');
        if (!btn || !root.contains(btn)) return;
        const subcategory = btn.getAttribute("data-subcategory") || "all";
        activeSubcategoryByCategory[category] = subcategory;
        renderSectionCards(category);
      });
    });
  };

  const getHeaderOffset = () => (header ? header.getBoundingClientRect().height : 0);

  const setActiveLink = (activeLink) => {
    navLinks.forEach((link) => {
      const isActive = link === activeLink;
      link.classList.toggle("is-active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const setupDetailImageModal = () => {
    const modal = document.querySelector("#detailImageModal");
    const modalImg = document.querySelector("#detailModalImg");
    const modalTitle = document.querySelector("#detailModalTitle");
    const modalCounter = document.querySelector("#detailModalCounter");
    const btnPrev = document.querySelector("#detailModalPrev");
    const btnNext = document.querySelector("#detailModalNext");
    const closeTargets = modal?.querySelectorAll("[data-detail-modal-close]");

    if (!modal || !modalImg || !modalTitle || !modalCounter || !btnPrev || !btnNext) return;

    let currentItemId = "";
    let currentIndex = 0;

    const getOpenItem = () => furnitureItems.find((x) => x.id === currentItemId);

    const syncCarouselUi = () => {
      const item = getOpenItem();
      const images = item?.detailImages || [];
      const total = images.length;
      if (!total) {
        modalImg.removeAttribute("src");
        modalImg.alt = "";
        modalCounter.textContent = "";
        return;
      }
      const idx = ((currentIndex % total) + total) % total;
      currentIndex = idx;
      const src = images[idx];
      modalImg.src = src;
      modalImg.alt = `${item.name}局部图 ${idx + 1}`;
      modalCounter.textContent = `局部图 ${idx + 1} / ${total}`;
    };

    const openModal = (itemId, startIndex = 0) => {
      const item = furnitureItems.find((x) => x.id === itemId);
      if (!item?.detailImages?.length) return;
      currentItemId = itemId;
      currentIndex = startIndex;
      modalTitle.textContent = `${item.name} · 局部细节`;
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      syncCarouselUi();
    };

    const closeModal = () => {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      currentItemId = "";
      modalImg.removeAttribute("src");
    };

    const step = (delta) => {
      const item = getOpenItem();
      const total = item?.detailImages?.length || 0;
      if (!total) return;
      currentIndex = (currentIndex + delta + total) % total;
      syncCarouselUi();
    };

    btnPrev.addEventListener("click", () => step(-1));
    btnNext.addEventListener("click", () => step(1));

    closeTargets?.forEach((el) => {
      el.addEventListener("click", () => closeModal());
    });

    document.addEventListener("keydown", (event) => {
      if (!modal.classList.contains("is-open")) return;
      if (event.key === "Escape") {
        event.preventDefault();
        closeModal();
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        step(-1);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        step(1);
      }
    });

    document.querySelector("main")?.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const card = target.closest(".furniture-card");
      if (!card) return;
      const itemId = card.getAttribute("data-item-id");
      if (!itemId) return;

      const thumb = target.closest(".detail-thumb");
      if (thumb && card.contains(thumb)) {
        const raw = thumb.getAttribute("data-detail-index");
        const idx = raw != null ? parseInt(raw, 10) : 0;
        openModal(itemId, Number.isFinite(idx) ? idx : 0);
        return;
      }

      if (target.closest(".detail-view-btn")) {
        openModal(itemId, 0);
      }
    });
  };

  let heroBannerAbortController = null;

  const refreshHeroBanner = () => {
    const root = document.querySelector("#heroBanner");
    const track = document.querySelector("#heroBannerTrack");
    const dotsRoot = document.querySelector("#heroBannerDots");
    const prevBtn = document.querySelector("#heroBannerPrev");
    const nextBtn = document.querySelector("#heroBannerNext");
    if (!root || !track || !dotsRoot || !prevBtn || !nextBtn) return;

    if (heroBannerAbortController) {
      heroBannerAbortController.abort();
      heroBannerAbortController = null;
    }

    const urls = bannerImageUrls.map((u) => String(u || "").trim()).filter(Boolean);
    if (!urls.length) {
      root.hidden = true;
      track.innerHTML = "";
      dotsRoot.innerHTML = "";
      prevBtn.hidden = true;
      nextBtn.hidden = true;
      dotsRoot.hidden = true;
      return;
    }

    heroBannerAbortController = new AbortController();
    const { signal } = heroBannerAbortController;

    root.hidden = false;
    const n = urls.length;
    const slidePct = 100 / n;

    track.innerHTML = urls
      .map(
        (src, i) => `
      <div class="hero-banner__slide" role="group" aria-roledescription="幻灯片" aria-label="第 ${i + 1} 张，共 ${n} 张">
        <img src="${escapeAttrUrl(src)}" alt="首页横幅 ${i + 1}/${n}" loading="${i === 0 ? "eager" : "lazy"}">
      </div>
    `
      )
      .join("");

    track.style.width = `${n * 100}%`;
    track.querySelectorAll(".hero-banner__slide").forEach((slide) => {
      slide.style.flex = `0 0 ${slidePct}%`;
    });

    dotsRoot.innerHTML = urls
      .map(
        (_, i) => `
      <button type="button" class="hero-banner__dot${i === 0 ? " is-active" : ""}" data-banner-index="${i}" role="tab" aria-selected="${i === 0}" aria-label="第 ${i + 1} 张"></button>
    `
      )
      .join("");

    let index = 0;
    let timerId = null;
    const prefersReduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const apply = () => {
      track.style.transform = `translateX(-${index * slidePct}%)`;
      dotsRoot.querySelectorAll(".hero-banner__dot").forEach((dot, i) => {
        const on = i === index;
        dot.classList.toggle("is-active", on);
        dot.setAttribute("aria-selected", String(on));
      });
    };

    const goTo = (i) => {
      index = ((i % n) + n) % n;
      apply();
      restartAutoplay();
    };

    const stopAutoplay = () => {
      if (timerId != null) {
        clearInterval(timerId);
        timerId = null;
      }
    };

    const startAutoplay = () => {
      stopAutoplay();
      if (n <= 1 || prefersReduced) return;
      timerId = window.setInterval(() => goTo(index + 1), 5000);
    };

    const restartAutoplay = () => {
      stopAutoplay();
      startAutoplay();
    };

    // 当轮播被重新渲染（AbortController.abort）时，确保旧定时器被清理，
    // 避免上传/删除后出现多个自动播放定时器同时运行。
    signal.addEventListener(
      "abort",
      () => {
        stopAutoplay();
      },
      { once: true }
    );

    if (n <= 1) {
      prevBtn.hidden = true;
      nextBtn.hidden = true;
      dotsRoot.hidden = true;
    } else {
      prevBtn.hidden = false;
      nextBtn.hidden = false;
      dotsRoot.hidden = false;
    }

    prevBtn.addEventListener("click", () => goTo(index - 1), { signal });
    nextBtn.addEventListener("click", () => goTo(index + 1), { signal });

    dotsRoot.addEventListener(
      "click",
      (event) => {
        const btn = event.target.closest("[data-banner-index]");
        if (!btn || !dotsRoot.contains(btn)) return;
        const raw = btn.getAttribute("data-banner-index");
        const i = raw != null ? parseInt(raw, 10) : 0;
        if (!Number.isFinite(i)) return;
        goTo(i);
      },
      { signal }
    );

    root.addEventListener("mouseenter", stopAutoplay, { signal });
    root.addEventListener("mouseleave", startAutoplay, { signal });
    root.addEventListener("focusin", stopAutoplay, { signal });
    root.addEventListener(
      "focusout",
      (event) => {
        if (!root.contains(event.relatedTarget)) startAutoplay();
      },
      { signal }
    );

    apply();
    startAutoplay();
  };

  const setupNavigation = () => {
    if (!navLinks.length) return;
    const linksWithSections = navLinks
      .map((link) => {
        const targetId = link.getAttribute("href");
        const section = targetId ? document.querySelector(targetId) : null;
        return section ? { link, section } : null;
      })
      .filter(Boolean);

    linksWithSections.forEach(({ link, section }) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const headerOffset = getHeaderOffset();
        const targetY = section.getBoundingClientRect().top + window.scrollY - headerOffset - 8;
        window.scrollTo({ top: Math.max(0, targetY), behavior: "smooth" });
        setActiveLink(link);
      });
    });

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const active = linksWithSections.find(({ section }) => section === entry.target);
            if (active) setActiveLink(active.link);
          });
        },
        { root: null, rootMargin: "-35% 0px -50% 0px", threshold: 0.01 }
      );
      linksWithSections.forEach(({ section }) => observer.observe(section));
    } else {
      const updateActiveOnScroll = () => {
        const headerOffset = getHeaderOffset();
        const currentY = window.scrollY + headerOffset + 20;
        let current = linksWithSections[0];
        linksWithSections.forEach((item) => {
          if (item.section.offsetTop <= currentY) current = item;
        });
        if (current) setActiveLink(current.link);
      };
      window.addEventListener("scroll", updateActiveOnScroll, { passive: true });
      updateActiveOnScroll();
    }
  };

  const panelStyle = `
    .admin-overlay { position: fixed; inset: 0; background: rgba(27, 20, 16, 0.52); display: none; z-index: 3000; }
    .admin-overlay.is-open { display: block; }
    .admin-panel {
      position: fixed; right: 16px; bottom: 16px; width: min(720px, calc(100% - 24px));
      max-height: calc(100vh - 32px); overflow: auto; z-index: 3100; display: none;
      background: #fffaf3; border: 1px solid #dfd2c3; border-radius: 14px;
      box-shadow: 0 18px 36px rgba(72, 20, 28, 0.22); padding: 14px;
      font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
    }
    .admin-panel.is-open { display: block; }
    .admin-top { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
    .admin-title { margin: 0; color: #7b1e2f; font-size: 18px; }
    .admin-close {
      border: 0; background: #7b1e2f; color: #fff; border-radius: 8px; padding: 6px 10px; cursor: pointer;
    }
    .admin-note { margin: 8px 0 14px; color: #6a5d54; font-size: 13px; }
    .admin-reset-wrap { margin: 0 0 14px; }
    .btn-reset-default {
      width: 100%; border: 1px solid #c9a9a0; border-radius: 9px; padding: 9px 12px; cursor: pointer;
      font-size: 13px; font-family: inherit; color: #5e1423; background: #fff5f0;
      transition: background 0.2s ease, border-color 0.2s ease;
    }
    .btn-reset-default:hover,
    .btn-reset-default:focus-visible {
      background: #ffe8e0; border-color: #b64354; outline: none;
    }
    .admin-grid { display: grid; gap: 10px; grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .admin-grid .full { grid-column: 1 / -1; }
    .admin-label { display: block; font-size: 13px; margin-bottom: 4px; color: #4a3f37; }
    .admin-input, .admin-select, .admin-textarea {
      width: 100%; padding: 8px 10px; border-radius: 8px; border: 1px solid #d7c8b7; background: #fffdf9; font-size: 14px;
    }
    .admin-textarea { min-height: 84px; resize: vertical; }
    .admin-submit {
      border: 0; background: linear-gradient(145deg, #7b1e2f, #5e1423); color: #fff8ee;
      border-radius: 9px; padding: 9px 14px; cursor: pointer; font-size: 14px;
    }
    .admin-list-title { margin: 16px 0 8px; color: #7b1e2f; font-size: 16px; }
    .admin-list-tools {
      display: grid;
      gap: 8px;
      margin-bottom: 10px;
    }
    .admin-list-tools-row {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 180px);
      gap: 8px;
    }
    .admin-list-search,
    .admin-list-filter {
      width: 100%;
      padding: 8px 10px;
      border-radius: 8px;
      border: 1px solid #d7c8b7;
      background: #fffdf9;
      font-size: 13px;
      font-family: inherit;
    }
    .admin-list-pager {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      flex-wrap: wrap;
    }
    .admin-pager-info {
      margin: 0;
      font-size: 12px;
      color: #7a6b60;
    }
    .admin-pager-actions {
      display: flex;
      gap: 8px;
    }
    .admin-pager-btn {
      border: 0;
      border-radius: 8px;
      padding: 6px 10px;
      cursor: pointer;
      font-size: 12px;
      background: #a88972;
      color: #fff;
    }
    .admin-pager-btn:disabled {
      opacity: 0.45;
      cursor: not-allowed;
    }
    .admin-list { display: grid; gap: 10px; }
    .admin-item {
      border: 1px solid #e4d8ca; border-radius: 10px; padding: 10px; background: #fff;
      display: grid; gap: 8px;
    }
    .admin-item-head { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
    .admin-item-name { margin: 0; font-size: 14px; color: #3f352f; }
    .admin-item-meta { font-size: 12px; color: #8b7b70; }
    .admin-actions { display: flex; gap: 8px; }
    .btn-danger, .btn-save {
      border: 0; border-radius: 8px; padding: 6px 10px; cursor: pointer; font-size: 12px;
    }
    .btn-danger { background: #b64354; color: #fff; }
    .btn-save { background: #365f4c; color: #fff; }
    .admin-detail-rows { display: grid; gap: 8px; margin-top: 6px; }
    .admin-detail-upload-row {
      display: flex; align-items: center; gap: 8px; flex-wrap: wrap;
    }
    .admin-detail-upload-row .admin-input[type="file"] { flex: 1; min-width: 140px; }
    .admin-upload-status {
      margin: 0;
      min-height: 20px;
      font-size: 12px;
      color: #7b1e2f;
    }
    .admin-upload-status.is-busy::before {
      content: "⏳ ";
    }
    .admin-upload-preview {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      min-height: 0;
    }
    .admin-upload-preview[hidden] { display: none; }
    .admin-upload-preview-item {
      width: 56px;
      height: 56px;
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid #e4d8ca;
      background: #f6f1e7;
    }
    .admin-upload-preview-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .admin-upload-preview-item-actions {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 4px;
      margin-top: 4px;
    }
    .admin-upload-preview-item-actions button {
      border: 0;
      border-radius: 6px;
      padding: 3px 0;
      font-size: 11px;
      cursor: pointer;
      color: #fff;
      background: #a88972;
    }
    .admin-upload-preview-item-actions .btn-del {
      background: #b64354;
    }
    .admin-upload-preview-item-actions button:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
    .btn-row-inline {
      flex-shrink: 0; border: 0; border-radius: 8px; padding: 6px 10px; cursor: pointer; font-size: 12px;
      background: #a88972; color: #fff;
    }
    .btn-add-detail {
      margin-top: 8px; width: 100%; border: 1px dashed #d7c8b7; background: #fffdf9; color: #5e1423;
      border-radius: 8px; padding: 8px 12px; cursor: pointer; font-size: 13px; font-family: inherit;
    }
    .admin-existing-details {
      display: flex; flex-wrap: wrap; gap: 8px; margin-top: 6px;
    }
    .admin-detail-thumb {
      position: relative; width: 76px; height: 58px; border-radius: 8px; overflow: hidden;
      border: 1px solid #e4d8ca; background: #f6f1e7;
    }
    .admin-detail-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
    .admin-detail-thumb .btn-remove-thumb {
      position: absolute; top: 2px; right: 2px; width: 22px; height: 22px; padding: 0; border: 0; border-radius: 50%;
      font-size: 14px; line-height: 1; cursor: pointer; background: rgba(94, 20, 35, 0.92); color: #fff;
    }
    .admin-edit-new-rows { display: grid; gap: 8px; margin-top: 6px; }
    .admin-tabs { display: flex; gap: 8px; margin-bottom: 12px; flex-wrap: wrap; }
    .admin-tab {
      flex: 1; min-width: 120px; border: 1px solid #d7c8b7; background: #fffdf9; color: #5e1423;
      border-radius: 8px; padding: 8px 12px; cursor: pointer; font-size: 13px; font-family: inherit;
      transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
    }
    .admin-tab:hover, .admin-tab:focus-visible { outline: none; border-color: #7b1e2f; }
    .admin-tab.is-active {
      background: linear-gradient(145deg, #7b1e2f, #5e1423); color: #fff8ee; border-color: #5e1423;
    }
    .admin-tab-panel { display: none; }
    .admin-tab-panel.is-active { display: block; }
    .admin-banner-hint { margin: 0 0 10px; font-size: 12px; color: #8b7b70; line-height: 1.45; }
    .admin-banner-list { display: grid; gap: 10px; margin-bottom: 12px; }
    .admin-banner-row {
      display: grid; grid-template-columns: minmax(0, 120px) minmax(0, 1fr); gap: 10px; align-items: center;
      border: 1px solid #e4d8ca; border-radius: 10px; padding: 8px; background: #fff;
    }
    .admin-banner-thumb-wrap {
      width: 100%; max-width: 120px; aspect-ratio: 16 / 9; border-radius: 6px; overflow: hidden;
      background: #f0e8df; border: 1px solid #e4d8ca;
    }
    .admin-banner-thumb { width: 100%; height: 100%; object-fit: cover; display: block; }
    .admin-banner-row-actions { display: flex; flex-wrap: wrap; gap: 6px; align-items: center; }
    .admin-banner-row-actions .admin-banner-btn-move {
      border: 0; border-radius: 6px; padding: 5px 8px; cursor: pointer; font-size: 11px;
      background: #a88972; color: #fff;
    }
    .admin-banner-row-actions .admin-banner-btn-move:disabled { opacity: 0.4; cursor: not-allowed; }
    .admin-banner-row-actions .admin-banner-btn-del {
      border: 0; border-radius: 6px; padding: 5px 8px; cursor: pointer; font-size: 11px;
      background: #b64354; color: #fff;
    }
    .admin-banner-empty { margin: 0; font-size: 13px; color: #8b7b70; }
    .admin-banner-footer { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 4px; }
    @media (max-width: 640px) {
      .admin-panel { right: 8px; left: 8px; width: auto; bottom: 8px; max-height: calc(100vh - 16px); }
      .admin-grid { grid-template-columns: 1fr; }
      .admin-list-tools-row { grid-template-columns: 1fr; }
    }
  `;

  const injectPanelStyle = () => {
    const style = document.createElement("style");
    style.textContent = panelStyle;
    document.head.appendChild(style);
  };

  const buildPanel = () => {
    const overlay = document.createElement("div");
    overlay.className = "admin-overlay";
    overlay.id = "adminOverlay";

    const panel = document.createElement("aside");
    panel.className = "admin-panel";
    panel.id = "adminPanel";
    panel.innerHTML = `
      <div class="admin-top">
        <h3 class="admin-title">店主管理面板</h3>
        <button class="admin-close" type="button" id="adminCloseBtn">关闭</button>
      </div>
      <p class="admin-note">双击页面底部可再次打开/关闭面板。数据保存在当前浏览器本地。</p>
      <div class="admin-tabs" role="tablist" aria-label="管理分类">
        <button type="button" class="admin-tab is-active" role="tab" aria-selected="true" data-action="admin-tab" data-tab="furniture">家具管理</button>
        <button type="button" class="admin-tab" role="tab" aria-selected="false" data-action="admin-tab" data-tab="banner">轮播图管理</button>
      </div>
      <div id="adminPanelFurniture" class="admin-tab-panel is-active" role="tabpanel">
      <div class="admin-reset-wrap">
        <button type="button" class="btn-reset-default" data-action="reset-to-default">重置所有数据到默认</button>
      </div>
      <form id="adminAddForm">
        <div class="admin-grid">
          <div>
            <label class="admin-label" for="furnitureType">大类</label>
            <select class="admin-select" id="furnitureType" required>
              <option value="hongmu">红木家具</option>
              <option value="vintage">中古家具</option>
              <option value="case">家装案例</option>
            </select>
          </div>
          <div>
            <label class="admin-label" for="furnitureSubcategory">小科目</label>
            <select class="admin-select" id="furnitureSubcategory" required></select>
          </div>
          <div>
            <label class="admin-label" for="furnitureName">项目名称</label>
            <input class="admin-input" id="furnitureName" type="text" maxlength="50" required>
          </div>
          <div>
            <label class="admin-label" for="wholeImageFile">整体图（上传）</label>
            <input class="admin-input" id="wholeImageFile" type="file" accept="image/*">
          </div>
          <div class="full">
            <span class="admin-label">局部图（上传，可多张）</span>
            <input class="admin-input" id="detailImagesFile" type="file" accept="image/*" multiple>
          </div>
          <div class="full">
            <p id="adminUploadStatus" class="admin-upload-status" aria-live="polite"></p>
            <div id="adminDetailQueue" class="admin-upload-preview" hidden></div>
          </div>
          <div>
            <label class="admin-label" for="wholeImageUrl">整体图 URL（可选）</label>
            <input class="admin-input" id="wholeImageUrl" type="url" placeholder="https://...">
          </div>
          <div>
            <label class="admin-label" for="detailImageUrl">局部图 URL（可选，多条可用逗号分隔）</label>
            <input class="admin-input" id="detailImageUrl" type="text" placeholder="https://a.jpg, https://b.jpg">
          </div>
          <div class="full">
            <label class="admin-label" for="furnitureDescription">项目描述</label>
            <textarea class="admin-textarea" id="furnitureDescription" maxlength="300" required></textarea>
          </div>
          <div class="full">
            <button class="admin-submit" type="submit">上传并新增项目</button>
          </div>
        </div>
      </form>
      <h4 class="admin-list-title">当前项目（可修改描述与局部图 / 删除）</h4>
      <div class="admin-list-tools">
        <div class="admin-list-tools-row">
          <input id="adminListSearch" class="admin-list-search" type="search" placeholder="搜索名称/描述/小科目">
          <select id="adminListCategoryFilter" class="admin-list-filter">
            <option value="all">全部大类</option>
            <option value="hongmu">红木家具</option>
            <option value="vintage">中古家具</option>
            <option value="case">家装案例</option>
          </select>
        </div>
        <div class="admin-list-pager">
          <p id="adminPageInfo" class="admin-pager-info"></p>
          <div class="admin-pager-actions">
            <button type="button" class="admin-pager-btn" data-action="admin-prev-page">上一页</button>
            <button type="button" class="admin-pager-btn" data-action="admin-next-page">下一页</button>
          </div>
        </div>
      </div>
      <div class="admin-list" id="adminItemList"></div>
      </div>
      <div id="adminPanelBanner" class="admin-tab-panel" role="tabpanel">
        <h4 class="admin-list-title">首页轮播图</h4>
        <p class="admin-banner-hint">添加、删除或调整顺序后会自动写入 localStorage（键名 bannerImages）并刷新首页轮播。也可手动点「保存到本地」。</p>
        <div id="adminBannerList" class="admin-banner-list"></div>
        <input type="file" id="adminBannerFileInput" accept="image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp" multiple style="position:absolute;width:0;height:0;opacity:0;pointer-events:none" tabindex="-1" aria-hidden="true">
        <div class="admin-banner-footer">
          <button type="button" class="admin-submit" data-action="banner-add">添加新图片</button>
          <button type="button" class="btn-save" data-action="banner-save">保存到本地</button>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    document.body.appendChild(panel);
    return { overlay, panel };
  };

  const UPLOAD_MAX_WIDTH = 1200;
  const UPLOAD_QUALITY = 0.7;

  const dataUrlByteSize = (dataUrl) => {
    const base64 = String(dataUrl || "").split(",")[1] || "";
    if (!base64) return 0;
    const padding = base64.endsWith("==") ? 2 : base64.endsWith("=") ? 1 : 0;
    return Math.max(0, Math.floor((base64.length * 3) / 4) - padding);
  };

  const formatBytes = (bytes) => {
    const size = Number(bytes) || 0;
    if (size < 1024) return `${size} B`;
    if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
    return `${(size / (1024 * 1024)).toFixed(2)} MB`;
  };

  const summarizeCompressionStats = (records) => {
    const totalBefore = records.reduce((sum, x) => sum + (x.beforeBytes || 0), 0);
    const totalAfter = records.reduce((sum, x) => sum + (x.afterBytes || 0), 0);
    if (!totalBefore) return "";
    const reducedPct = Math.max(0, ((totalBefore - totalAfter) / totalBefore) * 100);
    return `压缩前 ${formatBytes(totalBefore)}，压缩后 ${formatBytes(totalAfter)}，减少 ${reducedPct.toFixed(1)}%。`;
  };

  // 上传时统一压缩：宽度不超过 1200px，质量 0.7，再存 Base64。
  const compressImageToBase64 = (file, maxWidth = UPLOAD_MAX_WIDTH, quality = UPLOAD_QUALITY) =>
    new Promise((resolve, reject) => {
      if (!(file instanceof File)) {
        resolve({ dataUrl: "", beforeBytes: 0, afterBytes: 0 });
        return;
      }
      if (!/^image\//i.test(file.type)) {
        reject(new Error("仅支持图片文件上传。"));
        return;
      }

      const objectUrl = URL.createObjectURL(file);
      const img = new Image();
      img.onload = () => {
        const naturalWidth = img.naturalWidth || maxWidth;
        const naturalHeight = img.naturalHeight || maxWidth;
        const scale = naturalWidth > maxWidth ? maxWidth / naturalWidth : 1;
        const w = Math.max(1, Math.round(naturalWidth * scale));
        const h = Math.max(1, Math.round(naturalHeight * scale));

        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          URL.revokeObjectURL(objectUrl);
          reject(new Error("压缩失败：无法创建画布上下文。"));
          return;
        }
        ctx.drawImage(img, 0, 0, w, h);
        const dataUrl = canvas.toDataURL("image/jpeg", quality);
        URL.revokeObjectURL(objectUrl);
        resolve({
          dataUrl,
          beforeBytes: file.size || 0,
          afterBytes: dataUrlByteSize(dataUrl)
        });
      };
      img.onerror = () => {
        URL.revokeObjectURL(objectUrl);
        reject(new Error("图片读取失败"));
      };
      img.src = objectUrl;
    });

  const CATEGORY_ORDER = ["hongmu", "vintage", "case"];
  const ADMIN_PAGE_SIZE = 10;
  const adminListState = {
    query: "",
    category: "all",
    page: 1
  };
  let addFormDetailImages = [];

  const buildCategoryOptionsHtml = (selectedCategory) =>
    CATEGORY_ORDER.filter((key) => key in sectionMeta)
      .map((key) => {
        const selected = key === selectedCategory ? " selected" : "";
        return `<option value="${safeText(key)}"${selected}>${safeText(sectionMeta[key].title)}</option>`;
      })
      .join("");

  const buildSubcategoryOptionsHtml = (category, selectedSubcategory) => {
    const list = sectionMeta[category]?.allowedSubcategories || ["其他"];
    const selected = list.includes(selectedSubcategory) ? selectedSubcategory : list[0];
    return list
      .map((sub) => {
        const isSelected = sub === selected ? " selected" : "";
        return `<option value="${safeText(sub)}"${isSelected}>${safeText(sub)}</option>`;
      })
      .join("");
  };

  const runWhenIdle = (task) =>
    new Promise((resolve, reject) => {
      const runner = async () => {
        try {
          resolve(await task());
        } catch (error) {
          reject(error);
        }
      };
      if (typeof window !== "undefined" && typeof window.requestIdleCallback === "function") {
        window.requestIdleCallback(() => runner(), { timeout: 500 });
      } else {
        window.setTimeout(() => runner(), 0);
      }
    });

  const createDebouncedHandler = (fn, delay = 180) => {
    let timerId = null;
    return (...args) => {
      if (timerId != null) window.clearTimeout(timerId);
      timerId = window.setTimeout(() => {
        timerId = null;
        fn(...args);
      }, delay);
    };
  };

  const createEditNewDetailRowEl = () => {
    const wrap = document.createElement("div");
    wrap.className = "admin-detail-upload-row";
    wrap.innerHTML = `
      <input type="file" accept="image/*" class="admin-input" data-role="new-detail-file">
      <button type="button" class="btn-row-inline" data-action="remove-new-detail-row">移除此框</button>
    `;
    return wrap;
  };

  const renderAddFormDetailQueue = () => {
    const queueRoot = document.querySelector("#adminDetailQueue");
    if (!(queueRoot instanceof HTMLElement)) return;
    if (!addFormDetailImages.length) {
      queueRoot.innerHTML = "";
      queueRoot.hidden = true;
      return;
    }
    queueRoot.innerHTML = addFormDetailImages
      .map(
        (item, index) => `
        <div class="admin-upload-preview-item">
          <img src="${safeText(item.dataUrl)}" alt="局部图预览 ${index + 1}">
          <div class="admin-upload-preview-item-actions">
            <button type="button" data-action="addform-detail-move-up" data-index="${index}" ${index === 0 ? "disabled" : ""}>上移</button>
            <button type="button" data-action="addform-detail-move-down" data-index="${index}" ${index === addFormDetailImages.length - 1 ? "disabled" : ""}>下移</button>
            <button type="button" class="btn-del" data-action="addform-detail-remove" data-index="${index}">删除</button>
          </div>
        </div>
      `
      )
      .join("");
    queueRoot.hidden = false;
  };

  const getFilteredAdminItems = () => {
    const q = adminListState.query.trim().toLowerCase();
    const category = adminListState.category;
    return furnitureItems.filter((item) => {
      if (category !== "all" && item.category !== category) return false;
      if (!q) return true;
      const text = `${item.name} ${item.description} ${item.subcategory} ${sectionMeta[item.category]?.title || ""}`.toLowerCase();
      return text.includes(q);
    });
  };

  const renderAdminList = () => {
    const listRoot = document.querySelector("#adminItemList");
    const pageInfo = document.querySelector("#adminPageInfo");
    const prevBtn = document.querySelector('[data-action="admin-prev-page"]');
    const nextBtn = document.querySelector('[data-action="admin-next-page"]');
    if (!listRoot) return;
    const filtered = getFilteredAdminItems();
    const total = filtered.length;
    const totalPages = Math.max(1, Math.ceil(total / ADMIN_PAGE_SIZE));
    if (adminListState.page > totalPages) adminListState.page = totalPages;
    if (adminListState.page < 1) adminListState.page = 1;
    const start = (adminListState.page - 1) * ADMIN_PAGE_SIZE;
    const currentPageItems = filtered.slice(start, start + ADMIN_PAGE_SIZE);

    if (pageInfo instanceof HTMLElement) {
      pageInfo.textContent = `第 ${adminListState.page} / ${totalPages} 页，共 ${total} 条`;
    }
    if (prevBtn instanceof HTMLButtonElement) prevBtn.disabled = adminListState.page <= 1;
    if (nextBtn instanceof HTMLButtonElement) nextBtn.disabled = adminListState.page >= totalPages;

    if (!currentPageItems.length) {
      listRoot.innerHTML =
        total === 0
          ? '<div class="admin-item"><p class="admin-item-name">暂无匹配项目。</p></div>'
          : '<div class="admin-item"><p class="admin-item-name">当前页暂无项目。</p></div>';
      return;
    }
    listRoot.innerHTML = currentPageItems
      .map(
        (item) => `
          <div class="admin-item" data-id="${safeText(item.id)}">
            <div class="admin-item-head">
              <p class="admin-item-name">${safeText(item.name)}</p>
              <span class="admin-item-meta">${safeText(sectionMeta[item.category]?.title || item.category)} · ${safeText(item.subcategory || "其他")}</span>
            </div>
            <div class="admin-grid">
              <div>
                <label class="admin-label">大类</label>
                <select class="admin-select" data-role="edit-category">
                  ${buildCategoryOptionsHtml(item.category)}
                </select>
              </div>
              <div>
                <label class="admin-label">小科目</label>
                <select class="admin-select" data-role="edit-subcategory">
                  ${buildSubcategoryOptionsHtml(item.category, item.subcategory)}
                </select>
              </div>
            </div>
            <textarea class="admin-textarea" data-role="desc">${safeText(item.description)}</textarea>
            <span class="admin-label">当前局部图（点击 × 删除单张，立即生效）</span>
            <div class="admin-existing-details">
              ${item.detailImages
                .map(
                  (url, index) => `
                <div class="admin-detail-thumb">
                  <img src="${safeText(url)}" alt="局部图 ${index + 1}">
                  <button type="button" class="btn-remove-thumb" data-action="remove-detail" data-index="${index}" aria-label="删除局部图 ${index + 1}">×</button>
                </div>
              `
                )
                .join("")}
            </div>
            <span class="admin-label">新增局部图（上传后点保存此项写入本地）</span>
            <div class="admin-edit-new-rows"></div>
            <button type="button" class="btn-add-detail" data-action="add-edit-detail-row" data-id="${safeText(item.id)}">+ 添加局部图上传框</button>
            <div class="admin-actions">
              <button class="btn-save" type="button" data-action="save">保存此项</button>
              <button class="btn-danger" type="button" data-action="delete">删除项目</button>
            </div>
          </div>
        `
      )
      .join("");
  };

  const renderBannerAdminList = () => {
    const root = document.querySelector("#adminBannerList");
    if (!root) return;
    const total = bannerImageUrls.length;
    if (!total) {
      root.innerHTML =
        '<p class="admin-banner-empty">暂无轮播图。请点击「添加新图片」上传（支持 JPG / PNG / WebP）。</p>';
      return;
    }
    root.innerHTML = bannerImageUrls
      .map(
        (url, i) => `
        <div class="admin-banner-row" data-banner-row-index="${i}">
          <div class="admin-banner-thumb-wrap">
            <img class="admin-banner-thumb" src="${escapeAttrUrl(url)}" alt="轮播图 ${i + 1}">
          </div>
          <div class="admin-banner-row-actions">
            <button type="button" class="admin-banner-btn-move" data-action="banner-move-up" data-index="${i}" ${i === 0 ? "disabled" : ""} aria-label="上移">上移</button>
            <button type="button" class="admin-banner-btn-move" data-action="banner-move-down" data-index="${i}" ${i === total - 1 ? "disabled" : ""} aria-label="下移">下移</button>
            <button type="button" class="admin-banner-btn-del" data-action="banner-delete" data-index="${i}" aria-label="删除该张">删除</button>
          </div>
        </div>
      `
      )
      .join("");
  };

  const persistBannerAndRefresh = () => {
    saveBannerImages(bannerImageUrls);
    refreshHeroBanner();
    renderBannerAdminList();
  };

  const switchAdminTab = (tab) => {
    const furn = document.querySelector("#adminPanelFurniture");
    const ban = document.querySelector("#adminPanelBanner");
    document.querySelectorAll(".admin-tab").forEach((btn) => {
      const on = btn.getAttribute("data-tab") === tab;
      btn.classList.toggle("is-active", on);
      btn.setAttribute("aria-selected", String(on));
    });
    furn?.classList.toggle("is-active", tab === "furniture");
    ban?.classList.toggle("is-active", tab === "banner");
  };

  const upsertAndRender = () => {
    saveItems(furnitureItems);
    renderAllCards();
    renderAdminList();
  };

  const togglePanel = (open) => {
    const panel = document.querySelector("#adminPanel");
    const overlay = document.querySelector("#adminOverlay");
    if (!panel || !overlay) return;
    const shouldOpen = typeof open === "boolean" ? open : !panel.classList.contains("is-open");
    panel.classList.toggle("is-open", shouldOpen);
    overlay.classList.toggle("is-open", shouldOpen);
  };

  const openAdminPanel = () => {
    togglePanel(true);
  };

  if (typeof window !== "undefined") {
    window.openAdminPanel = openAdminPanel;
  }

  const setupAdminPanel = () => {
    injectPanelStyle();
    buildPanel();
    addFormDetailImages = [];
    renderAddFormDetailQueue();
    renderAdminList();
    renderBannerAdminList();

    const panel = document.querySelector("#adminPanel");
    const overlay = document.querySelector("#adminOverlay");
    const closeBtn = document.querySelector("#adminCloseBtn");
    const addForm = document.querySelector("#adminAddForm");
    const categorySelect = document.querySelector("#furnitureType");
    const subcategorySelect = document.querySelector("#furnitureSubcategory");
    const detailImagesFileInput = document.querySelector("#detailImagesFile");
    const listSearchInput = document.querySelector("#adminListSearch");
    const listCategoryFilter = document.querySelector("#adminListCategoryFilter");
    const uploadStatus = document.querySelector("#adminUploadStatus");

    const setUploadStatus = (text = "", busy = false) => {
      if (!(uploadStatus instanceof HTMLElement)) return;
      uploadStatus.textContent = text;
      uploadStatus.classList.toggle("is-busy", Boolean(busy));
    };

    const clearUploadStatusLater = () => {
      window.setTimeout(() => setUploadStatus("", false), 1200);
    };

    const handleImageUpload = async (event) => {
      const input = event?.target;
      if (!(input instanceof HTMLInputElement)) return;
      const files = Array.from(input.files || []);
      if (!files.length) return;
      setUploadStatus("正在处理局部图...", true);
      const stats = [];
      try {
        await runWhenIdle(async () => {
          for (const file of files) {
            const { dataUrl, beforeBytes, afterBytes } = await compressImageToBase64(file);
            if (!dataUrl) continue;
            addFormDetailImages.push({
              id: createId(),
              dataUrl,
              beforeBytes,
              afterBytes
            });
            stats.push({ beforeBytes, afterBytes });
          }
        });
        renderAddFormDetailQueue();
        const summary = summarizeCompressionStats(stats);
        setUploadStatus(summary ? `局部图已加入。${summary}` : "局部图已加入。", false);
        clearUploadStatusLater();
      } catch {
        setUploadStatus("", false);
        alert("局部图读取失败，请重试。");
      } finally {
        input.value = "";
      }
    };

    const syncSubcategoryOptions = () => {
      if (!(categorySelect instanceof HTMLSelectElement)) return;
      if (!(subcategorySelect instanceof HTMLSelectElement)) return;
      const category = resolveCategory(categorySelect.value);
      subcategorySelect.innerHTML = buildSubcategoryOptionsHtml(category, "");
    };

    syncSubcategoryOptions();
    categorySelect?.addEventListener("change", () => syncSubcategoryOptions());
    if (listSearchInput instanceof HTMLInputElement) {
      listSearchInput.value = adminListState.query;
      const onSearchInput = createDebouncedHandler(() => {
        adminListState.query = listSearchInput.value.trim();
        adminListState.page = 1;
        renderAdminList();
      }, 180);
      listSearchInput.addEventListener("input", onSearchInput);
    }
    if (listCategoryFilter instanceof HTMLSelectElement) {
      listCategoryFilter.value = adminListState.category;
      listCategoryFilter.addEventListener("change", () => {
        const raw = listCategoryFilter.value;
        adminListState.category = raw === "all" ? "all" : resolveCategory(raw);
        adminListState.page = 1;
        renderAdminList();
      });
    }
    panel?.addEventListener("change", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLSelectElement)) return;
      if (target.getAttribute("data-role") !== "edit-category") return;
      const itemRoot = target.closest(".admin-item");
      if (!itemRoot) return;
      const subSelect = itemRoot.querySelector('[data-role="edit-subcategory"]');
      if (!(subSelect instanceof HTMLSelectElement)) return;
      const category = resolveCategory(target.value);
      subSelect.innerHTML = buildSubcategoryOptionsHtml(category, "");
    });

    overlay?.addEventListener("click", () => togglePanel(false));
    closeBtn?.addEventListener("click", () => togglePanel(false));

    const debouncedDetailFileSelect = createDebouncedHandler((event) => {
      handleImageUpload(event);
    }, 180);
    detailImagesFileInput?.addEventListener("change", debouncedDetailFileSelect);

    const bannerFileInput = document.querySelector("#adminBannerFileInput");
    const debouncedBannerChangeHandler = createDebouncedHandler(async (event) => {
      const input = event.target;
      if (!(input instanceof HTMLInputElement)) return;
      const files = input.files;
      if (!files?.length) return;
      const allowed = /^image\/(jpeg|png|webp)$/i;
      const compressionStats = [];
      setUploadStatus("轮播图上传中，请稍候...", true);
      try {
        await runWhenIdle(async () => {
          for (const file of files) {
            if (!allowed.test(file.type)) {
              alert(`已跳过不支持的格式：${file.name}（请使用 JPG、PNG 或 WebP）`);
              continue;
            }
            const { dataUrl, beforeBytes, afterBytes } = await compressImageToBase64(file);
            if (dataUrl) bannerImageUrls.push(dataUrl);
            compressionStats.push({ beforeBytes, afterBytes });
          }
        });
      } catch {
        alert("图片读取失败，请重试。");
      } finally {
        const summary = summarizeCompressionStats(compressionStats);
        setUploadStatus(summary ? `轮播图上传完成。${summary}` : "轮播图上传完成。", false);
        clearUploadStatusLater();
      }
      input.value = "";
      persistBannerAndRefresh();
    }, 220);
    bannerFileInput?.addEventListener("change", debouncedBannerChangeHandler);

    addForm?.addEventListener("submit", async (event) => {
      event.preventDefault();
      const category = resolveCategory(document.querySelector("#furnitureType")?.value || "hongmu");
      const subcategoryRaw = document.querySelector("#furnitureSubcategory")?.value || "";
      const subcategory = resolveSubcategory(category, subcategoryRaw);
      const name = document.querySelector("#furnitureName")?.value?.trim() || "";
      const description = document.querySelector("#furnitureDescription")?.value?.trim() || "";
      const wholeUrl = document.querySelector("#wholeImageUrl")?.value?.trim() || "";
      const detailUrl = document.querySelector("#detailImageUrl")?.value?.trim() || "";
      const wholeFile = document.querySelector("#wholeImageFile")?.files?.[0] || null;

      if (!name || !description) {
        alert("请填写项目名称和描述。");
        return;
      }

      let wholeImage = wholeUrl;
      const detailImages = detailUrl
        .split(",")
        .map((url) => url.trim())
        .filter(Boolean);
      const compressionStats = [];

      try {
        setUploadStatus("项目上传中，请稍候...", true);
        if (wholeFile) {
          const { dataUrl, beforeBytes, afterBytes } = await compressImageToBase64(wholeFile);
          wholeImage = dataUrl;
          compressionStats.push({ beforeBytes, afterBytes });
        }
      } catch {
        alert("图片读取失败，请重试。");
        setUploadStatus("", false);
        return;
      }

      addFormDetailImages.forEach((item) => {
        if (!item?.dataUrl) return;
        detailImages.push(item.dataUrl);
        compressionStats.push({ beforeBytes: item.beforeBytes || 0, afterBytes: item.afterBytes || 0 });
      });

      if (!wholeImage || !detailImages.length) {
        alert("请至少为整体图和局部图各提供一个来源（上传或 URL）。");
        setUploadStatus("", false);
        return;
      }

      furnitureItems.push({
        id: createId(),
        category,
        subcategory,
        type: category,
        name,
        description,
        wholeImage,
        detailImages
      });
      upsertAndRender();
      addForm.reset();
      syncSubcategoryOptions();
      addFormDetailImages = [];
      renderAddFormDetailQueue();
      const summary = summarizeCompressionStats(compressionStats);
      setUploadStatus(summary ? `项目上传完成。${summary}` : "项目上传完成。", false);
      clearUploadStatusLater();
      alert("项目已新增。");
    });

    panel?.addEventListener("click", async (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      const action = target.getAttribute("data-action");
      if (!action) return;

      if (action === "reset-to-default") {
        const ok = confirm(
          "确定要将所有家具数据重置为默认吗？将清除本地已保存的数据（含通过管理面板上传的图片），且无法恢复。"
        );
        if (!ok) return;
        try {
          localStorage.removeItem(STORAGE_KEY);
        } catch (err) {
          console.warn("清除 localStorage 失败", err);
        }
        furnitureItems = normalizeItems(DEFAULT_FURNITURE_DATA);
        saveItems(furnitureItems);
        upsertAndRender();
        addForm?.reset();
        syncSubcategoryOptions();
        addFormDetailImages = [];
        renderAddFormDetailQueue();
        alert("已恢复为内置默认数据（红木 2 件、中古 2 件、家装案例 2 件），列表与首页展示已更新。");
        return;
      }

      if (action === "admin-tab") {
        const tab = target.getAttribute("data-tab");
        if (tab === "furniture" || tab === "banner") switchAdminTab(tab);
        return;
      }

      if (action === "admin-prev-page") {
        adminListState.page = Math.max(1, adminListState.page - 1);
        renderAdminList();
        return;
      }

      if (action === "admin-next-page") {
        const totalPages = Math.max(1, Math.ceil(getFilteredAdminItems().length / ADMIN_PAGE_SIZE));
        adminListState.page = Math.min(totalPages, adminListState.page + 1);
        renderAdminList();
        return;
      }

      if (action === "banner-add") {
        document.querySelector("#adminBannerFileInput")?.click();
        return;
      }

      if (action === "banner-save") {
        saveBannerImages(bannerImageUrls);
        refreshHeroBanner();
        renderBannerAdminList();
        alert("轮播图已保存到本地（键名 bannerImages）。");
        return;
      }

      if (action === "banner-delete") {
        const idx = parseInt(target.getAttribute("data-index") || "-1", 10);
        if (!Number.isFinite(idx) || idx < 0 || idx >= bannerImageUrls.length) return;
        if (!confirm("确定删除该张轮播图？")) return;
        bannerImageUrls.splice(idx, 1);
        persistBannerAndRefresh();
        return;
      }

      if (action === "banner-move-up") {
        const idx = parseInt(target.getAttribute("data-index") || "-1", 10);
        if (!Number.isFinite(idx) || idx <= 0) return;
        [bannerImageUrls[idx - 1], bannerImageUrls[idx]] = [bannerImageUrls[idx], bannerImageUrls[idx - 1]];
        persistBannerAndRefresh();
        return;
      }

      if (action === "banner-move-down") {
        const idx = parseInt(target.getAttribute("data-index") || "-1", 10);
        if (!Number.isFinite(idx) || idx < 0 || idx >= bannerImageUrls.length - 1) return;
        [bannerImageUrls[idx], bannerImageUrls[idx + 1]] = [bannerImageUrls[idx + 1], bannerImageUrls[idx]];
        persistBannerAndRefresh();
        return;
      }

      if (action === "addform-detail-remove") {
        const idx = parseInt(target.getAttribute("data-index") || "-1", 10);
        if (!Number.isFinite(idx) || idx < 0 || idx >= addFormDetailImages.length) return;
        addFormDetailImages.splice(idx, 1);
        renderAddFormDetailQueue();
        return;
      }

      if (action === "addform-detail-move-up") {
        const idx = parseInt(target.getAttribute("data-index") || "-1", 10);
        if (!Number.isFinite(idx) || idx <= 0) return;
        [addFormDetailImages[idx - 1], addFormDetailImages[idx]] = [
          addFormDetailImages[idx],
          addFormDetailImages[idx - 1]
        ];
        renderAddFormDetailQueue();
        return;
      }

      if (action === "addform-detail-move-down") {
        const idx = parseInt(target.getAttribute("data-index") || "-1", 10);
        if (!Number.isFinite(idx) || idx < 0 || idx >= addFormDetailImages.length - 1) return;
        [addFormDetailImages[idx], addFormDetailImages[idx + 1]] = [
          addFormDetailImages[idx + 1],
          addFormDetailImages[idx]
        ];
        renderAddFormDetailQueue();
        return;
      }

      if (action === "add-edit-detail-row") {
        const itemRoot = target.closest(".admin-item");
        const box = itemRoot?.querySelector(".admin-edit-new-rows");
        if (box) box.appendChild(createEditNewDetailRowEl());
        return;
      }

      if (action === "remove-new-detail-row") {
        target.closest(".admin-detail-upload-row")?.remove();
        return;
      }

      if (action === "remove-detail") {
        const itemRoot = target.closest(".admin-item");
        const id = itemRoot?.getAttribute("data-id");
        const idxRaw = target.getAttribute("data-index");
        if (!id || idxRaw == null) return;
        const idx = parseInt(idxRaw, 10);
        if (!Number.isFinite(idx)) return;
        const current = furnitureItems.find((x) => x.id === id);
        if (!current?.detailImages?.length) return;
        if (current.detailImages.length <= 1) {
          alert("至少需保留一张局部图。");
          return;
        }
        furnitureItems = furnitureItems.map((x) =>
          x.id === id ? { ...x, detailImages: x.detailImages.filter((_, i) => i !== idx) } : x
        );
        upsertAndRender();
        return;
      }

      const itemRoot = target.closest(".admin-item");
      const id = itemRoot?.getAttribute("data-id");
      if (!id) return;

      if (action === "delete") {
        const item = furnitureItems.find((x) => x.id === id);
        const ok = confirm(`确认删除「${item?.name || "该项目"}」吗？`);
        if (!ok) return;
        furnitureItems = furnitureItems.filter((x) => x.id !== id);
        upsertAndRender();
        return;
      }

      if (action === "save") {
        const textarea = itemRoot.querySelector('[data-role="desc"]');
        if (!(textarea instanceof HTMLTextAreaElement)) return;
        const categorySelectEl = itemRoot.querySelector('[data-role="edit-category"]');
        const subcategorySelectEl = itemRoot.querySelector('[data-role="edit-subcategory"]');
        const category = resolveCategory(
          categorySelectEl instanceof HTMLSelectElement ? categorySelectEl.value : "hongmu"
        );
        const subcategory = resolveSubcategory(
          category,
          subcategorySelectEl instanceof HTMLSelectElement ? subcategorySelectEl.value : ""
        );
        const value = textarea.value.trim();
        if (!value) {
          alert("描述不能为空。");
          return;
        }
        const base = furnitureItems.find((x) => x.id === id);
        const existing = base?.detailImages ? [...base.detailImages] : [];
        const newInputs = itemRoot.querySelectorAll('[data-role="new-detail-file"]');
        let added = [];
        try {
          for (const inp of newInputs) {
            if (!(inp instanceof HTMLInputElement)) continue;
            const file = inp.files?.[0];
            if (!file) continue;
            const { dataUrl } = await compressImageToBase64(file);
            if (dataUrl) added.push(dataUrl);
          }
        } catch {
          alert("新局部图读取失败，请重试。");
          return;
        }
        const nextDetails = [...existing, ...added];
        if (!nextDetails.length) {
          alert("至少需保留或上传一张局部图。");
          return;
        }
        furnitureItems = furnitureItems.map((x) =>
          x.id === id
            ? {
                ...x,
                category,
                subcategory,
                type: category,
                description: value,
                detailImages: nextDetails
              }
            : x
        );
        upsertAndRender();
      }
    });

    const BOTTOM_DBLCLICK_HEIGHT = 50;
    const openByBottomDblClick = (event) => {
      const viewHeight = window.innerHeight || document.documentElement.clientHeight || 0;
      const fromBottom = viewHeight - event.clientY;
      if (fromBottom < 0 || fromBottom > BOTTOM_DBLCLICK_HEIGHT) return;
      console.log("双击底部");
      togglePanel(true);
    };

    // 使用 body + capture 监听，尽量不受页面内其他元素冒泡拦截影响。
    document.body?.addEventListener("dblclick", openByBottomDblClick, { capture: true });
  };

  setupSubcategoryFilters();
  renderAllCards();
  refreshHeroBanner();
  setupNavigation();
  setupDetailImageModal();
  setupAdminPanel();
})();
