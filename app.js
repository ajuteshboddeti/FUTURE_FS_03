/**
 * Andhra's Kitchen - Main Application Engine
 * Handles Menu Filtering, Live Search, Table Order Drawer, 
 * Table Reservation with Instant Dining Pass, Gallery Lightbox,
 * and Toast Notifications.
 */

// ==========================================
// 1. Menu Dataset
// ==========================================
const MENU_DATA = [
    // Starters & Appetizers
    {
        id: "starter-1",
        name: "Kaju Chicken Vepudu",
        teluguName: "కాజు చికెన్ వేపుడు",
        category: "starters",
        price: 240,
        diet: "non-veg",
        spice: 3,
        badge: "Chef's Signature",
        image: "images/chicken_fry.jpg",
        description: "Succulent chicken chunks roasted with golden crunchy cashews, fresh curry leaves, and stone-ground Guntur spices.",
        portion: "Serves 1-2 • 280g"
    },
    {
        id: "starter-2",
        name: "Rayalaseema Paneer 65",
        teluguName: "రాయలసీమ పన్నీర్ 65",
        category: "starters",
        price: 190,
        diet: "veg",
        spice: 2,
        badge: "Bestseller",
        image: "images/paneer_starter.jpg",
        description: "Crisp cottage cheese cubes wok-tossed in spiced fiery red chilli paste, roasted sesame seeds, and aromatic tempering.",
        portion: "Serves 1-2 • 250g"
    },
    {
        id: "starter-3",
        name: "Andhra Chicken 65",
        teluguName: "ఆంధ్రా చికెన్ 65",
        category: "starters",
        price: 180,
        diet: "non-veg",
        spice: 2,
        badge: "Classic",
        image: null,
        description: "Deep-marinated boneless morsels fried crisp with ginger-garlic, crushed peppercorns, and tempered curry leaves.",
        portion: "Serves 1-2 • 250g"
    },
    {
        id: "starter-4",
        name: "Pepper Chicken Sukka",
        teluguName: "మిరియాల చికెన్ సుక్కా",
        category: "starters",
        price: 210,
        diet: "non-veg",
        spice: 3,
        badge: "Spicy",
        image: null,
        description: "Crushed Tellicherry black pepper and caramelized shallots tossed with juicy bone-in chicken.",
        portion: "Serves 1-2 • 260g"
    },
    {
        id: "starter-5",
        name: "Crispy Corn & Green Chilli Vepudu",
        teluguName: "క్రిస్పీ కార్న్ వేపుడు",
        category: "starters",
        price: 160,
        diet: "veg",
        spice: 1,
        badge: "Vegetarian",
        image: null,
        description: "Sweet American corn flash-fried crisp with rice flour, roasted cumin, and finely slivered green chillies.",
        portion: "Serves 2 • 220g"
    },
    {
        id: "starter-6",
        name: "Mutton Sukka Vepudu",
        teluguName: "మటన్ సుక్కా వేపుడు",
        category: "starters",
        price: 280,
        diet: "non-veg",
        spice: 3,
        badge: "Royal Special",
        image: null,
        description: "Tender goat meat slow-roasted in an iron skillet with dry roasted coriander, cloves, and Guntur red chilli powder.",
        portion: "Serves 1-2 • 240g"
    },
    {
        id: "starter-7",
        name: "Gobi Manchuria (Andhra Style)",
        teluguName: "గోబీ మంచూరియా",
        category: "starters",
        price: 150,
        diet: "veg",
        spice: 2,
        badge: null,
        image: null,
        description: "Crispy cauliflower florets glazed in a spicy, tangy Andhra ginger-garlic and green chilli reduction.",
        portion: "Serves 2 • 240g"
    },
    {
        id: "starter-8",
        name: "Egg Mirchi Pakora",
        teluguName: "గుడ్డు మిరపకాయ బజ్జీ",
        category: "starters",
        price: 130,
        diet: "non-veg",
        spice: 2,
        badge: null,
        image: null,
        description: "Farm boiled eggs wrapped in spiced carom-scented besan batter, golden fried with raw onion salad.",
        portion: "4 pcs"
    },

    // Royal Biryanis
    {
        id: "biryani-1",
        name: "Hyderabadi Mutton Dum Biryani",
        teluguName: "హైదరాబాదీ మటన్ దమ్ బిర్యానీ",
        category: "biryani",
        price: 290,
        diet: "non-veg",
        spice: 2,
        badge: "Grand Signature",
        image: "images/hero_biryani.jpg",
        description: "Fragrant Daawat basmati slow-dum cooked in brass handi with succulent marinated mutton, saffron milk, and caramelized onions.",
        portion: "Serves 1-2 • With Salan & Raita"
    },
    {
        id: "biryani-2",
        name: "Gongura Chicken Dum Biryani",
        teluguName: "గోంగూర చికెన్ బిర్యానీ",
        category: "biryani",
        price: 240,
        diet: "non-veg",
        spice: 3,
        badge: "Andhra Special",
        image: null,
        description: "Unique tangy Gongura leaf chutney layered with spiced chicken biryani, creating an unforgettable sour-fiery taste.",
        portion: "Serves 1-2 • With Salan & Raita"
    },
    {
        id: "biryani-3",
        name: "Nawabi Chicken Dum Biryani",
        teluguName: "చికెన్ దమ్ బిర్యానీ",
        category: "biryani",
        price: 220,
        diet: "non-veg",
        spice: 2,
        badge: "Bestseller",
        image: null,
        description: "Classic tender bone-in chicken slow cooked over wood charcoal with aromatic whole spices, kewra, and mint leaves.",
        portion: "Serves 1-2 • With Salan & Raita"
    },
    {
        id: "biryani-4",
        name: "Royal Paneer & Subz Biryani",
        teluguName: "పన్నీర్ వెజ్ బిర్యానీ",
        category: "biryani",
        price: 200,
        diet: "veg",
        spice: 1,
        badge: "Vegetarian",
        image: null,
        description: "Char-grilled malai paneer cubes, green peas, carrots, and saffron-infused basmati rice with whole spices.",
        portion: "Serves 1-2 • With Veg Salan & Raita"
    },
    {
        id: "biryani-5",
        name: "Coastal Prawns Dum Biryani",
        teluguName: "రొయ్యల బిర్యానీ",
        category: "biryani",
        price: 320,
        diet: "non-veg",
        spice: 2,
        badge: "Seafood Choice",
        image: null,
        description: "Fresh Bay of Bengal sea prawns marinated in lemon, pepper, and coastal Andhra spices, layered with fragrant rice.",
        portion: "Serves 1-2 • With Salan & Raita"
    },
    {
        id: "biryani-6",
        name: "Family Handi Feast Biryani",
        teluguName: "ఫ్యామిలీ ప్యాక్ బిర్యానీ",
        category: "biryani",
        price: 580,
        diet: "non-veg",
        spice: 2,
        badge: "Value Feast",
        image: null,
        description: "Generous handi portion of chicken dum biryani, 4 boiled eggs, double portion salan & raita, and 2 sweet desserts.",
        portion: "Serves 3-4 Adults"
    },

    // Curries & Pulusu
    {
        id: "curry-1",
        name: "Gongura Mutton / Chicken Curry",
        teluguName: "గోంగూర మటన్ కూర",
        category: "curries",
        price: 290,
        diet: "non-veg",
        spice: 3,
        badge: "Andhra Legend",
        image: "images/curry_gongura.jpg",
        description: "Traditional tangy sorrel (gongura) leaves cooked with tender mutton cuts in cold-pressed gingelly oil and crushed spices.",
        portion: "Serves 2 • Pairs best with Rice/Parotta"
    },
    {
        id: "curry-2",
        name: "Nellore Chepala Pulusu (Fish Curry)",
        teluguName: "నెల్లూరు చేపల పులుసు",
        category: "curries",
        price: 270,
        diet: "non-veg",
        spice: 3,
        badge: "Coastal Classic",
        image: null,
        description: "Fresh river fish simmered in aged tamarind extract, roasted fenugreek, garlic, and fiery red chili gravy in clay pot.",
        portion: "Serves 2 • Tangy & Spicy"
    },
    {
        id: "curry-3",
        name: "Andhra Natukodi Iguru",
        teluguName: "నాటుకోడి ఇగురు",
        category: "curries",
        price: 260,
        diet: "non-veg",
        spice: 3,
        badge: "Village Recipe",
        image: null,
        description: "Free-range country chicken cooked to a rich, semi-dry gravy with poppy seeds, dry coconut, and roasted Guntur masala.",
        portion: "Serves 1-2 • Fiery"
    },
    {
        id: "curry-4",
        name: "Prawns Iguru Masala",
        teluguName: "రొయ్యల ఇగురు",
        category: "curries",
        price: 310,
        diet: "non-veg",
        spice: 2,
        badge: "Seafood",
        image: null,
        description: "Plump sea prawns braised with minced shallots, curry leaves, ginger paste, and home-style Andhra gravy.",
        portion: "Serves 1-2"
    },
    {
        id: "curry-5",
        name: "Paneer Gongura Masala",
        teluguName: "పన్నీర్ గోంగూర మసాలా",
        category: "curries",
        price: 210,
        diet: "veg",
        spice: 2,
        badge: "Veg Special",
        image: null,
        description: "Fresh malai paneer simmered in a mildly tangy gongura-tomato gravy finished with a dash of fresh cream.",
        portion: "Serves 2"
    },
    {
        id: "curry-6",
        name: "Andhra Tomato Pappu (Dal Tadka)",
        teluguName: "టమాటా పప్పు",
        category: "curries",
        price: 140,
        diet: "veg",
        spice: 1,
        badge: "Homestyle",
        image: null,
        description: "Comforting toor dal cooked with ripe sour country tomatoes, crushed garlic cloves, and ghee-tempered mustard seeds.",
        portion: "Serves 2"
    },

    // Meals & Traditional Bhojanam
    {
        id: "meal-1",
        name: "Grand Royal Andhra Bhojanam (Thali)",
        teluguName: "ఆంధ్రా రాయల్ భోజనం",
        category: "meals",
        price: 220,
        diet: "veg",
        spice: 2,
        badge: "Iconic Experience",
        image: "images/andhra_thali.jpg",
        description: "Traditional feast served on banana leaf: Steaming Sona Masoori, Desi Ghee, Kandi Podi, Pappu, 2 Veg Curries, Sambar, Rasam, Curd, Papad, Avakaya & Payasam.",
        portion: "Unlimited Dine-in"
    },
    {
        id: "meal-2",
        name: "Non-Veg Maharaja Bhojanam",
        teluguName: "నాన్ వెజ్ మహారాజా భోజనం",
        category: "meals",
        price: 320,
        diet: "non-veg",
        spice: 3,
        badge: "Ultimate Non-Veg",
        image: null,
        description: "Royal Thali including Chicken Curry, Mutton Sukka Vepudu, Fish Fry, Boiled Egg, Podi, Ghee, Sambar, Rasam, Curd & Sweet.",
        portion: "Unlimited Rice & Gravies"
    },
    {
        id: "meal-3",
        name: "Rayalaseema Ragi Sangati & Natukodi",
        teluguName: "రాగి సంగటి & నాటుకోడి పులుసు",
        category: "meals",
        price: 280,
        diet: "non-veg",
        spice: 3,
        badge: "Heritage Classic",
        image: null,
        description: "Steaming hot finger-millet balls drizzled with pure desi ghee, served alongside fiery village-style country chicken gravy.",
        portion: "Complete Meal • 2 Sangati Balls"
    },
    {
        id: "meal-4",
        name: "Special Veg Executive Bhojanam",
        teluguName: "స్పెషల్ వెజ్ భోజనం",
        category: "meals",
        price: 180,
        diet: "veg",
        spice: 1,
        badge: "Quick Meal",
        image: null,
        description: "Wholesome meal with 2 vegetable dry & wet curries, dal, sambar, rasam, curd, appalam, pickle, and warm dessert.",
        portion: "Serves 1"
    },

    // Beverages & Desserts
    {
        id: "drink-1",
        name: "Spiced Masala Majjiga (Buttermilk)",
        teluguName: "మసాలా మజ్జిగ",
        category: "drinks",
        price: 60,
        diet: "veg",
        spice: 1,
        badge: "Cooling Refreshment",
        image: null,
        description: "Churned country yogurt blended with fresh crushed ginger, green chilli, curry leaves, and roasted cumin.",
        portion: "350ml Glass"
    },
    {
        id: "drink-2",
        name: "Royal Sugandhi (Nannari) Sarbath",
        teluguName: "సుగంధి నన్నారి షర్బత్",
        category: "drinks",
        price: 80,
        diet: "veg",
        spice: 0,
        badge: "Summer Elixir",
        image: null,
        description: "Traditional herbal sarsaparilla root extract infused with fresh lime juice and sweet basil seeds.",
        portion: "350ml Chilled"
    },
    {
        id: "sweet-1",
        name: "Royal Hyderabadi Double Ka Meetha",
        teluguName: "డబుల్ కా మీఠా",
        category: "drinks",
        price: 130,
        diet: "veg",
        spice: 0,
        badge: "Sweet Treat",
        image: null,
        description: "Crispy bread triangles soaked in rich saffron-condensed milk, topped with ghee-roasted cashews and almonds.",
        portion: "Single Portion • 160g"
    },
    {
        id: "sweet-2",
        name: "Ghee Roasted Semiya Payasam",
        teluguName: "సేమియా పాయసం",
        category: "drinks",
        price: 100,
        diet: "veg",
        spice: 0,
        badge: "Traditional",
        image: null,
        description: "Fine vermicelli simmered in rich creamy milk, infused with green cardamom pods and golden fried raisins.",
        portion: "Single Cup • 180ml"
    }
];

// ==========================================
// 2. State Management
// ==========================================
const appState = {
    activeCategory: "all",
    activeDiet: "all",
    searchQuery: "",
    orderCart: {}, // itemId: quantity
    selectedPartySize: 4
};

// ==========================================
// 3. DOM Elements Cache
// ==========================================
let menuGridEl;
let searchInputEl;
let categoryTabBtns;
let dietFilterBtns;
let cartDrawerEl;
let drawerOverlayEl;
let cartItemsContainerEl;
let cartTotalEl;
let cartCountBadges;
let mobileDrawerEl;
let reservationFormEl;
let passModalEl;
let lightboxModalEl;

// ==========================================
// 4. Initialization
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    cacheDOMElements();
    initNavbarScroll();
    initMenu();
    initMobileNav();
    initOrderDrawer();
    initReservationSystem();
    initGalleryLightbox();
    initReviewsSystem();
    updateLiveOperatingHours();
    setupCurrentDateInPicker();
});

function cacheDOMElements() {
    menuGridEl = document.getElementById("menuGrid");
    searchInputEl = document.getElementById("menuSearchInput");
    categoryTabBtns = document.querySelectorAll(".category-tabs .tab-btn");
    dietFilterBtns = document.querySelectorAll(".diet-filter .diet-btn");
    cartDrawerEl = document.getElementById("orderDrawer");
    drawerOverlayEl = document.getElementById("drawerOverlay");
    cartItemsContainerEl = document.getElementById("orderItemsContainer");
    cartTotalEl = document.getElementById("orderTotalAmount");
    cartCountBadges = document.querySelectorAll(".cart-count");
    mobileDrawerEl = document.getElementById("mobileDrawer");
    reservationFormEl = document.getElementById("reservationForm");
    passModalEl = document.getElementById("passModal");
    lightboxModalEl = document.getElementById("lightboxModal");
}

// ==========================================
// 5. Navbar Sticky & Scroll Effects
// ==========================================
function initNavbarScroll() {
    const navbar = document.getElementById("mainNavbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
}

// ==========================================
// 6. Menu Rendering & Filtering
// ==========================================
function initMenu() {
    renderMenu();

    // Search Input Listener
    if (searchInputEl) {
        searchInputEl.addEventListener("input", (e) => {
            appState.searchQuery = e.target.value.toLowerCase().trim();
            renderMenu();
        });
    }

    // Category Tabs
    categoryTabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            categoryTabBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            appState.activeCategory = btn.getAttribute("data-category");
            renderMenu();
        });
    });

    // Diet Filter
    dietFilterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            dietFilterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            appState.activeDiet = btn.getAttribute("data-diet");
            renderMenu();
        });
    });
}

function renderMenu() {
    if (!menuGridEl) return;

    // Filter Logic
    const filteredItems = MENU_DATA.filter(item => {
        // Category Match
        const matchCategory = (appState.activeCategory === "all") || (item.category === appState.activeCategory);

        // Diet Match
        let matchDiet = true;
        if (appState.activeDiet === "veg") matchDiet = (item.diet === "veg");
        if (appState.activeDiet === "non-veg") matchDiet = (item.diet === "non-veg");
        if (appState.activeDiet === "spicy") matchDiet = (item.spice >= 3);

        // Search Match
        let matchSearch = true;
        if (appState.searchQuery) {
            const name = item.name.toLowerCase();
            const telugu = item.teluguName.toLowerCase();
            const desc = item.description.toLowerCase();
            matchSearch = name.includes(appState.searchQuery) || telugu.includes(appState.searchQuery) || desc.includes(appState.searchQuery);
        }

        return matchCategory && matchDiet && matchSearch;
    });

    if (filteredItems.length === 0) {
        menuGridEl.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
                <div style="font-size: 3rem; margin-bottom: 12px;">🍲</div>
                <h3 style="font-size: 1.4rem; color: var(--text-pure); margin-bottom: 8px;">No matching culinary delights found</h3>
                <p>Try searching with another keyword or resetting the category filter.</p>
                <button class="btn btn-outline" style="margin-top: 18px;" onclick="resetMenuFilters()">Show All Items</button>
            </div>
        `;
        return;
    }

    menuGridEl.innerHTML = filteredItems.map(item => {
        const spiceChilies = "🌶️".repeat(item.spice || 1);
        const dietClass = item.diet === "veg" ? "veg" : "non-veg";
        const badgeHtml = item.badge ? `<span class="card-badge-top ${item.spice >= 3 ? 'spicy' : ''}">${item.badge}</span>` : '';

        const imageHtml = item.image ? `
            <div class="menu-card-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                ${badgeHtml}
                <span class="diet-indicator ${dietClass}" title="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}"></span>
            </div>
        ` : `
            <div class="menu-card-image" style="height: 100px; background: linear-gradient(135deg, #241108 0%, #150904 100%);">
                ${badgeHtml}
                <span class="diet-indicator ${dietClass}" title="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}"></span>
            </div>
        `;

        return `
            <div class="menu-card" data-id="${item.id}">
                ${imageHtml}
                <div class="menu-card-body">
                    <div class="menu-card-header">
                        <div>
                            <h3 class="menu-item-name">${item.name}</h3>
                            <div style="font-size: 0.78rem; color: var(--gold-light); opacity: 0.85; margin-top: 2px;">${item.teluguName}</div>
                        </div>
                        <span class="menu-item-price">₹${item.price}</span>
                    </div>

                    <div class="menu-item-spice">
                        <span style="font-size: 0.78rem; color: var(--text-muted); margin-right: 4px;">Spice:</span>
                        <span>${spiceChilies}</span>
                    </div>

                    <p class="menu-item-desc">${item.description}</p>

                    <div class="menu-card-footer">
                        <span class="portion-text">${item.portion}</span>
                        <button class="btn-add-item" onclick="addToOrder('${item.id}')">
                            <span>+</span> Add to Order
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join("");
}

function resetMenuFilters() {
    appState.searchQuery = "";
    appState.activeCategory = "all";
    appState.activeDiet = "all";
    if (searchInputEl) searchInputEl.value = "";
    categoryTabBtns.forEach(b => b.classList.toggle("active", b.getAttribute("data-category") === "all"));
    dietFilterBtns.forEach(b => b.classList.toggle("active", b.getAttribute("data-diet") === "all"));
    renderMenu();
}

// ==========================================
// 7. Interactive Order Drawer / Cart
// ==========================================
function initOrderDrawer() {
    const openBtns = document.querySelectorAll(".btn-open-cart");
    const closeBtn = document.getElementById("closeOrderDrawer");

    openBtns.forEach(btn => {
        btn.addEventListener("click", () => openOrderDrawer());
    });

    if (closeBtn) closeBtn.addEventListener("click", () => closeOrderDrawer());
    if (drawerOverlayEl) drawerOverlayEl.addEventListener("click", () => {
        closeOrderDrawer();
        closeMobileNav();
    });

    // Attach to reservation button
    const attachBtn = document.getElementById("btnAttachOrderToBooking");
    if (attachBtn) {
        attachBtn.addEventListener("click", () => {
            attachOrderToReservationForm();
            closeOrderDrawer();
            const bookSection = document.getElementById("book");
            if (bookSection) {
                bookSection.scrollIntoView({ behavior: "smooth" });
                showToast("✨ Order items attached to your reservation form!", "success");
            }
        });
    }

    // Clear cart button
    const clearBtn = document.getElementById("btnClearOrder");
    if (clearBtn) {
        clearBtn.addEventListener("click", () => {
            appState.orderCart = {};
            renderOrderCart();
            showToast("Table order cleared", "info");
        });
    }
}

function openOrderDrawer() {
    if (cartDrawerEl) cartDrawerEl.classList.add("active");
    if (drawerOverlayEl) drawerOverlayEl.classList.add("active");
}

function closeOrderDrawer() {
    if (cartDrawerEl) cartDrawerEl.classList.remove("active");
    if (drawerOverlayEl) drawerOverlayEl.classList.remove("active");
}

function addToOrder(itemId) {
    const item = MENU_DATA.find(i => i.id === itemId);
    if (!item) return;

    if (!appState.orderCart[itemId]) {
        appState.orderCart[itemId] = 1;
    } else {
        appState.orderCart[itemId] += 1;
    }

    renderOrderCart();
    showToast(`Added ${item.name} to order`, "success");
}

function updateOrderItemQty(itemId, delta) {
    if (!appState.orderCart[itemId]) return;

    appState.orderCart[itemId] += delta;
    if (appState.orderCart[itemId] <= 0) {
        delete appState.orderCart[itemId];
    }

    renderOrderCart();
}

function renderOrderCart() {
    const cartKeys = Object.keys(appState.orderCart);
    const totalCount = cartKeys.reduce((sum, key) => sum + appState.orderCart[key], 0);

    // Update badges
    cartCountBadges.forEach(badge => {
        badge.textContent = totalCount;
    });

    if (!cartItemsContainerEl) return;

    if (cartKeys.length === 0) {
        cartItemsContainerEl.innerHTML = `
            <div class="empty-order-state">
                <div class="empty-order-icon">🍲</div>
                <h4 style="color: var(--text-pure); margin-bottom: 6px;">Your Table Order is Empty</h4>
                <p style="font-size: 0.88rem;">Explore the authentic Andhra menu and add your favorite curries, biryanis & starters.</p>
            </div>
        `;
        if (cartTotalEl) cartTotalEl.textContent = "₹0";
        return;
    }

    let subtotal = 0;
    cartItemsContainerEl.innerHTML = cartKeys.map(key => {
        const item = MENU_DATA.find(i => i.id === key);
        if (!item) return "";
        const qty = appState.orderCart[key];
        const lineTotal = item.price * qty;
        subtotal += lineTotal;

        return `
            <div class="order-item-row">
                <div class="order-item-info">
                    <div class="order-item-title">${item.name}</div>
                    <div class="order-item-price-unit">₹${item.price} each • <span style="color: var(--gold-light); font-weight: bold;">₹${lineTotal}</span></div>
                </div>
                <div class="qty-control">
                    <button class="qty-btn" onclick="updateOrderItemQty('${key}', -1)">-</button>
                    <span class="qty-val">${qty}</span>
                    <button class="qty-btn" onclick="updateOrderItemQty('${key}', 1)">+</button>
                </div>
            </div>
        `;
    }).join("");

    if (cartTotalEl) {
        cartTotalEl.textContent = `₹${subtotal}`;
    }
}

function attachOrderToReservationForm() {
    const cartKeys = Object.keys(appState.orderCart);
    if (cartKeys.length === 0) return;

    const summaryList = cartKeys.map(key => {
        const item = MENU_DATA.find(i => i.id === key);
        return item ? `${item.name} (x${appState.orderCart[key]})` : "";
    }).filter(Boolean).join(", ");

    const notesField = document.getElementById("reservationNotes");
    if (notesField) {
        notesField.value = `Pre-ordered items: ${summaryList}`;
    }
}

// ==========================================
// 8. Mobile Navigation Drawer
// ==========================================
function initMobileNav() {
    const toggleBtn = document.getElementById("navToggleBtn");
    const closeBtn = document.getElementById("closeMobileDrawer");
    const navLinks = document.querySelectorAll(".drawer-links a");

    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            if (mobileDrawerEl) mobileDrawerEl.classList.add("active");
            if (drawerOverlayEl) drawerOverlayEl.classList.add("active");
        });
    }

    if (closeBtn) closeBtn.addEventListener("click", closeMobileNav);

    navLinks.forEach(link => {
        link.addEventListener("click", closeMobileNav);
    });
}

function closeMobileNav() {
    if (mobileDrawerEl) mobileDrawerEl.classList.remove("active");
    if (drawerOverlayEl && !cartDrawerEl.classList.contains("active")) {
        drawerOverlayEl.classList.remove("active");
    }
}

// ==========================================
// 9. Table Reservation & Digital Dining Pass
// ==========================================
function initReservationSystem() {
    // Party size pills
    const partyBtns = document.querySelectorAll(".party-pill-btn");
    const hiddenPartyInput = document.getElementById("partySizeInput");

    partyBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            partyBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const size = btn.getAttribute("data-size");
            appState.selectedPartySize = size;
            if (hiddenPartyInput) hiddenPartyInput.value = size;
        });
    });

    // Form Submission
    if (reservationFormEl) {
        reservationFormEl.addEventListener("submit", (e) => {
            e.preventDefault();

            // Form validation
            const name = document.getElementById("resName").value.trim();
            const email = document.getElementById("resEmail").value.trim();
            const phone = document.getElementById("resPhone").value.trim();
            const date = document.getElementById("resDate").value;
            const time = document.getElementById("resTime").value;
            const seating = document.getElementById("resSeating").value;
            const spiceLevel = document.getElementById("resSpice").value;
            const notes = document.getElementById("reservationNotes").value.trim();

            if (!name || !phone || !date || !time) {
                showToast("Please fill in all required booking fields.", "error");
                return;
            }

            // Generate Booking ID
            const randomCode = Math.floor(1000 + Math.random() * 9000);
            const bookingId = `AK-${new Date().getFullYear()}-${randomCode}`;

            // Show confirmation voucher modal
            showDiningPass({
                bookingId,
                name,
                email,
                phone,
                date,
                time,
                guests: appState.selectedPartySize || 4,
                seating,
                spiceLevel,
                notes
            });

            // Post silently to Formspree endpoint so user's backend works
            try {
                const formData = new FormData(reservationFormEl);
                formData.append("Generated_Booking_ID", bookingId);
                fetch(reservationFormEl.action, {
                    method: "POST",
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                }).catch(() => {});
            } catch (err) {}

            showToast("🎉 Table successfully reserved! See your digital dining pass.", "success");
        });
    }

    // Close Dining Pass Modal
    const closePassBtn = document.getElementById("closePassModal");
    if (closePassBtn) {
        closePassBtn.addEventListener("click", () => {
            if (passModalEl) passModalEl.classList.remove("active");
        });
    }

    const printPassBtn = document.getElementById("btnPrintPass");
    if (printPassBtn) {
        printPassBtn.addEventListener("click", () => {
            window.print();
        });
    }
}

function showDiningPass(data) {
    if (!passModalEl) return;

    document.getElementById("passBookingId").textContent = data.bookingId;
    document.getElementById("passGuestName").textContent = data.name;
    document.getElementById("passDate").textContent = data.date;
    document.getElementById("passTime").textContent = data.time;
    document.getElementById("passGuests").textContent = `${data.guests} Guests`;
    document.getElementById("passSeating").textContent = data.seating;
    document.getElementById("passPhone").textContent = data.phone;

    passModalEl.classList.add("active");
}

function setupCurrentDateInPicker() {
    const dateInput = document.getElementById("resDate");
    if (dateInput) {
        const today = new Date().toISOString().split("T")[0];
        dateInput.min = today;
        dateInput.value = today;
    }
}

// ==========================================
// 10. Gallery Lightbox Modal
// ==========================================
function initGalleryLightbox() {
    const galleryCards = document.querySelectorAll(".gallery-card");
    const closeLightboxBtn = document.getElementById("closeLightbox");

    galleryCards.forEach(card => {
        card.addEventListener("click", () => {
            const img = card.querySelector("img");
            const title = card.getAttribute("data-title");
            const tag = card.getAttribute("data-tag");

            if (img && lightboxModalEl) {
                document.getElementById("lightboxImg").src = img.src;
                document.getElementById("lightboxTitle").textContent = title || "";
                document.getElementById("lightboxTag").textContent = tag || "";
                lightboxModalEl.classList.add("active");
            }
        });
    });

    if (closeLightboxBtn) {
        closeLightboxBtn.addEventListener("click", () => {
            if (lightboxModalEl) lightboxModalEl.classList.remove("active");
        });
    }

    if (lightboxModalEl) {
        lightboxModalEl.addEventListener("click", (e) => {
            if (e.target === lightboxModalEl) {
                lightboxModalEl.classList.remove("active");
            }
        });
    }
}

// ==========================================
// 11. Customer Reviews System
// ==========================================
function initReviewsSystem() {
    const addReviewBtn = document.getElementById("btnOpenReviewModal");
    const reviewModal = document.getElementById("reviewModal");
    const closeReviewModal = document.getElementById("closeReviewModal");
    const reviewForm = document.getElementById("reviewForm");
    const reviewsGrid = document.querySelector(".reviews-grid");

    if (addReviewBtn && reviewModal) {
        addReviewBtn.addEventListener("click", () => reviewModal.classList.add("active"));
    }

    if (closeReviewModal && reviewModal) {
        closeReviewModal.addEventListener("click", () => reviewModal.classList.remove("active"));
    }

    if (reviewForm && reviewsGrid) {
        reviewForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("revAuthor").value.trim();
            const city = document.getElementById("revCity").value.trim() || "Food Connoisseur";
            const text = document.getElementById("revText").value.trim();
            const stars = document.getElementById("revStars").value;

            if (!name || !text) return;

            const initial = name.charAt(0).toUpperCase();
            const starString = "★".repeat(parseInt(stars));

            const newCard = document.createElement("div");
            newCard.className = "review-card";
            newCard.innerHTML = `
                <div class="review-rating">${starString}</div>
                <p class="review-quote">"${text}"</p>
                <div class="reviewer-meta">
                    <div class="reviewer-avatar">${initial}</div>
                    <div class="reviewer-info">
                        <span class="reviewer-name">${name}</span>
                        <span class="reviewer-tag">${city} • Verified Diner</span>
                    </div>
                </div>
            `;

            reviewsGrid.prepend(newCard);
            reviewForm.reset();
            if (reviewModal) reviewModal.classList.remove("active");
            showToast("Thank you for sharing your dining experience! ⭐", "success");
        });
    }
}

// ==========================================
// 12. Live Operating Hours & Open Status
// ==========================================
function updateLiveOperatingHours() {
    const statusBadges = document.querySelectorAll(".live-status-pill");
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const timeDec = currentHour + (currentMinute / 60);

    // Lunch: 12:00 to 15:30 (3:30 PM), Dinner: 19:00 (7 PM) to 23:00 (11 PM)
    const isLunch = (timeDec >= 12.0 && timeDec <= 15.5);
    const isDinner = (timeDec >= 19.0 && timeDec <= 23.0);
    const isOpen = isLunch || isDinner;

    statusBadges.forEach(badge => {
        if (isOpen) {
            badge.innerHTML = `<span class="dot"></span> OPEN NOW • ${isLunch ? 'Lunch Service' : 'Dinner Service'}`;
            badge.style.color = "#34d399";
            badge.style.borderColor = "rgba(16, 185, 129, 0.3)";
        } else {
            badge.innerHTML = `<span class="dot" style="background:#f59e0b; box-shadow:0 0 8px #f59e0b;"></span> KITCHEN PREP • Next Service: 7:00 PM`;
            badge.style.color = "#fbbf24";
            badge.style.borderColor = "rgba(245, 158, 11, 0.3)";
        }
    });
}

// ==========================================
// 13. Toast Notification Helper
// ==========================================
function showToast(message, type = "info") {
    let container = document.getElementById("toastContainer");
    if (!container) {
        container = document.createElement("div");
        container.id = "toastContainer";
        container.className = "toast-container";
        document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = "toast";

    const icons = {
        success: "✓",
        error: "✕",
        info: "ℹ"
    };

    toast.innerHTML = `
        <span class="toast-icon" style="color: ${type === 'success' ? '#34d399' : type === 'error' ? '#ef4444' : '#fbbf24'};">${icons[type] || '✨'}</span>
        <span>${message}</span>
    `;

    container.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.add("show");
    });

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 400);
    }, 3500);
}
