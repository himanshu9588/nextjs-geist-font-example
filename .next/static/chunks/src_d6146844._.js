(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardAction": (()=>CardAction),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/badge.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Badge": (()=>Badge),
    "badgeVariants": (()=>badgeVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
            secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
            destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/progress.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Progress": (()=>Progress)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-progress/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Progress({ className, value, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "progress",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Indicator"], {
            "data-slot": "progress-indicator",
            className: "bg-primary h-full w-full flex-1 transition-all",
            style: {
                transform: `translateX(-${100 - (value || 0)}%)`
            }
        }, void 0, false, {
            fileName: "[project]/src/components/ui/progress.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/progress.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = Progress;
;
var _c;
__turbopack_context__.k.register(_c, "Progress");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/japanese-data.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// Japanese learning content and data
__turbopack_context__.s({
    "basicKanji": (()=>basicKanji),
    "getLessonsByCategory": (()=>getLessonsByCategory),
    "getLessonsByDifficulty": (()=>getLessonsByDifficulty),
    "getVocabularyByCategory": (()=>getVocabularyByCategory),
    "getVocabularyByJLPT": (()=>getVocabularyByJLPT),
    "hiraganaChart": (()=>hiraganaChart),
    "katakanaChart": (()=>katakanaChart),
    "lessonDatabase": (()=>lessonDatabase),
    "searchVocabulary": (()=>searchVocabulary),
    "vocabularyDatabase": (()=>vocabularyDatabase)
});
const vocabularyDatabase = [
    // Greetings
    {
        id: 'greeting_001',
        japanese: 'こんにちは',
        hiragana: 'こんにちは',
        romaji: 'konnichiwa',
        english: 'Hello',
        category: 'Greetings',
        jlptLevel: 'N5',
        examples: [
            {
                japanese: 'こんにちは、田中さん。',
                hiragana: 'こんにちは、たなかさん。',
                english: 'Hello, Mr. Tanaka.'
            }
        ]
    },
    {
        id: 'greeting_002',
        japanese: 'おはよう',
        hiragana: 'おはよう',
        romaji: 'ohayou',
        english: 'Good morning (casual)',
        category: 'Greetings',
        jlptLevel: 'N5'
    },
    {
        id: 'greeting_003',
        japanese: 'おはようございます',
        hiragana: 'おはようございます',
        romaji: 'ohayou gozaimasu',
        english: 'Good morning (polite)',
        category: 'Greetings',
        jlptLevel: 'N5'
    },
    {
        id: 'greeting_004',
        japanese: 'こんばんは',
        hiragana: 'こんばんは',
        romaji: 'konbanwa',
        english: 'Good evening',
        category: 'Greetings',
        jlptLevel: 'N5'
    },
    {
        id: 'greeting_005',
        japanese: 'さようなら',
        hiragana: 'さようなら',
        romaji: 'sayounara',
        english: 'Goodbye',
        category: 'Greetings',
        jlptLevel: 'N5'
    },
    // Family
    {
        id: 'family_001',
        japanese: '家族',
        hiragana: 'かぞく',
        romaji: 'kazoku',
        english: 'Family',
        category: 'Family',
        jlptLevel: 'N5'
    },
    {
        id: 'family_002',
        japanese: '父',
        hiragana: 'ちち',
        romaji: 'chichi',
        english: 'Father (my)',
        category: 'Family',
        jlptLevel: 'N5'
    },
    {
        id: 'family_003',
        japanese: '母',
        hiragana: 'はは',
        romaji: 'haha',
        english: 'Mother (my)',
        category: 'Family',
        jlptLevel: 'N5'
    },
    {
        id: 'family_004',
        japanese: '兄',
        hiragana: 'あに',
        romaji: 'ani',
        english: 'Older brother (my)',
        category: 'Family',
        jlptLevel: 'N5'
    },
    {
        id: 'family_005',
        japanese: '姉',
        hiragana: 'あね',
        romaji: 'ane',
        english: 'Older sister (my)',
        category: 'Family',
        jlptLevel: 'N5'
    },
    // Numbers
    {
        id: 'number_001',
        japanese: '一',
        hiragana: 'いち',
        romaji: 'ichi',
        english: 'One',
        category: 'Numbers',
        jlptLevel: 'N5'
    },
    {
        id: 'number_002',
        japanese: '二',
        hiragana: 'に',
        romaji: 'ni',
        english: 'Two',
        category: 'Numbers',
        jlptLevel: 'N5'
    },
    {
        id: 'number_003',
        japanese: '三',
        hiragana: 'さん',
        romaji: 'san',
        english: 'Three',
        category: 'Numbers',
        jlptLevel: 'N5'
    },
    {
        id: 'number_004',
        japanese: '四',
        hiragana: 'よん',
        romaji: 'yon',
        english: 'Four',
        category: 'Numbers',
        jlptLevel: 'N5'
    },
    {
        id: 'number_005',
        japanese: '五',
        hiragana: 'ご',
        romaji: 'go',
        english: 'Five',
        category: 'Numbers',
        jlptLevel: 'N5'
    },
    // Colors
    {
        id: 'color_001',
        japanese: '赤',
        hiragana: 'あか',
        romaji: 'aka',
        english: 'Red',
        category: 'Colors',
        jlptLevel: 'N5'
    },
    {
        id: 'color_002',
        japanese: '青',
        hiragana: 'あお',
        romaji: 'ao',
        english: 'Blue',
        category: 'Colors',
        jlptLevel: 'N5'
    },
    {
        id: 'color_003',
        japanese: '白',
        hiragana: 'しろ',
        romaji: 'shiro',
        english: 'White',
        category: 'Colors',
        jlptLevel: 'N5'
    },
    {
        id: 'color_004',
        japanese: '黒',
        hiragana: 'くろ',
        romaji: 'kuro',
        english: 'Black',
        category: 'Colors',
        jlptLevel: 'N5'
    },
    // Animals
    {
        id: 'animal_001',
        japanese: '猫',
        hiragana: 'ねこ',
        romaji: 'neko',
        english: 'Cat',
        category: 'Animals',
        jlptLevel: 'N5'
    },
    {
        id: 'animal_002',
        japanese: '犬',
        hiragana: 'いぬ',
        romaji: 'inu',
        english: 'Dog',
        category: 'Animals',
        jlptLevel: 'N5'
    },
    {
        id: 'animal_003',
        japanese: '鳥',
        hiragana: 'とり',
        romaji: 'tori',
        english: 'Bird',
        category: 'Animals',
        jlptLevel: 'N5'
    },
    // Food
    {
        id: 'food_001',
        japanese: '寿司',
        hiragana: 'すし',
        romaji: 'sushi',
        english: 'Sushi',
        category: 'Food',
        jlptLevel: 'N5'
    },
    {
        id: 'food_002',
        japanese: 'ラーメン',
        hiragana: 'ラーメン',
        romaji: 'raamen',
        english: 'Ramen',
        category: 'Food',
        jlptLevel: 'N5'
    },
    {
        id: 'food_003',
        japanese: '水',
        hiragana: 'みず',
        romaji: 'mizu',
        english: 'Water',
        category: 'Food',
        jlptLevel: 'N5'
    },
    {
        id: 'food_004',
        japanese: 'お茶',
        hiragana: 'おちゃ',
        romaji: 'ocha',
        english: 'Tea',
        category: 'Food',
        jlptLevel: 'N5'
    }
];
const lessonDatabase = [
    {
        id: 'lesson_001',
        title: 'Introduction to Hiragana',
        titleJapanese: 'ひらがな入門',
        description: 'Learn the basic Japanese syllabary - Hiragana',
        difficulty: 'Beginner',
        jlptLevel: 'N5',
        category: 'hiragana',
        estimatedTime: 30,
        content: {
            introduction: 'Hiragana is one of the three writing systems used in Japanese. It consists of 46 basic characters, each representing a syllable sound.',
            keyPoints: [
                'Hiragana is used for native Japanese words',
                'Each character represents a syllable (CV or V)',
                'There are 46 basic hiragana characters',
                'Hiragana is essential for reading Japanese'
            ],
            examples: [
                {
                    japanese: 'あ',
                    hiragana: 'あ',
                    english: 'a (vowel sound)'
                },
                {
                    japanese: 'か',
                    hiragana: 'か',
                    english: 'ka'
                },
                {
                    japanese: 'さ',
                    hiragana: 'さ',
                    english: 'sa'
                }
            ],
            exercises: [
                {
                    question: 'Which hiragana character represents the sound "a"?',
                    options: [
                        'あ',
                        'い',
                        'う',
                        'え'
                    ],
                    correctAnswer: 0,
                    explanation: 'あ (a) is the first hiragana character and represents the "a" vowel sound.'
                }
            ]
        }
    },
    {
        id: 'lesson_002',
        title: 'Basic Greetings',
        titleJapanese: '基本的な挨拶',
        description: 'Learn essential Japanese greetings for daily conversation',
        difficulty: 'Beginner',
        jlptLevel: 'N5',
        category: 'vocabulary',
        estimatedTime: 20,
        content: {
            introduction: 'Greetings are essential in Japanese culture. Learning proper greetings will help you make a good first impression.',
            keyPoints: [
                'Different greetings for different times of day',
                'Formal vs casual greetings',
                'Proper pronunciation is important',
                'Bowing often accompanies greetings'
            ],
            examples: [
                {
                    japanese: 'おはようございます',
                    hiragana: 'おはようございます',
                    english: 'Good morning (polite)'
                },
                {
                    japanese: 'こんにちは',
                    hiragana: 'こんにちは',
                    english: 'Hello/Good afternoon'
                },
                {
                    japanese: 'こんばんは',
                    hiragana: 'こんばんは',
                    english: 'Good evening'
                }
            ],
            exercises: [
                {
                    question: 'What greeting would you use in the afternoon?',
                    options: [
                        'おはよう',
                        'こんにちは',
                        'こんばんは',
                        'さようなら'
                    ],
                    correctAnswer: 1,
                    explanation: 'こんにちは is used from late morning through late afternoon.'
                }
            ]
        }
    },
    {
        id: 'lesson_003',
        title: 'Introduction to Katakana',
        titleJapanese: 'カタカナ入門',
        description: 'Learn Katakana, the syllabary used for foreign words',
        difficulty: 'Beginner',
        jlptLevel: 'N5',
        category: 'katakana',
        estimatedTime: 30,
        content: {
            introduction: 'Katakana is used primarily for foreign loanwords, onomatopoeia, and emphasis. It has the same sounds as hiragana but different characters.',
            keyPoints: [
                'Used for foreign words and names',
                'Same sounds as hiragana, different characters',
                'More angular appearance than hiragana',
                'Essential for modern Japanese'
            ],
            examples: [
                {
                    japanese: 'ア',
                    hiragana: 'ア',
                    english: 'a (vowel sound)'
                },
                {
                    japanese: 'カ',
                    hiragana: 'カ',
                    english: 'ka'
                },
                {
                    japanese: 'コーヒー',
                    hiragana: 'コーヒー',
                    english: 'coffee'
                }
            ],
            exercises: [
                {
                    question: 'Which writing system is used for foreign words?',
                    options: [
                        'Hiragana',
                        'Katakana',
                        'Kanji',
                        'Romaji'
                    ],
                    correctAnswer: 1,
                    explanation: 'Katakana is primarily used for foreign loanwords and names.'
                }
            ]
        }
    }
];
const hiraganaChart = [
    {
        character: 'あ',
        romaji: 'a'
    },
    {
        character: 'い',
        romaji: 'i'
    },
    {
        character: 'う',
        romaji: 'u'
    },
    {
        character: 'え',
        romaji: 'e'
    },
    {
        character: 'お',
        romaji: 'o'
    },
    {
        character: 'か',
        romaji: 'ka'
    },
    {
        character: 'き',
        romaji: 'ki'
    },
    {
        character: 'く',
        romaji: 'ku'
    },
    {
        character: 'け',
        romaji: 'ke'
    },
    {
        character: 'こ',
        romaji: 'ko'
    },
    {
        character: 'さ',
        romaji: 'sa'
    },
    {
        character: 'し',
        romaji: 'shi'
    },
    {
        character: 'す',
        romaji: 'su'
    },
    {
        character: 'せ',
        romaji: 'se'
    },
    {
        character: 'そ',
        romaji: 'so'
    },
    {
        character: 'た',
        romaji: 'ta'
    },
    {
        character: 'ち',
        romaji: 'chi'
    },
    {
        character: 'つ',
        romaji: 'tsu'
    },
    {
        character: 'て',
        romaji: 'te'
    },
    {
        character: 'と',
        romaji: 'to'
    },
    {
        character: 'な',
        romaji: 'na'
    },
    {
        character: 'に',
        romaji: 'ni'
    },
    {
        character: 'ぬ',
        romaji: 'nu'
    },
    {
        character: 'ね',
        romaji: 'ne'
    },
    {
        character: 'の',
        romaji: 'no'
    },
    {
        character: 'は',
        romaji: 'ha'
    },
    {
        character: 'ひ',
        romaji: 'hi'
    },
    {
        character: 'ふ',
        romaji: 'fu'
    },
    {
        character: 'へ',
        romaji: 'he'
    },
    {
        character: 'ほ',
        romaji: 'ho'
    },
    {
        character: 'ま',
        romaji: 'ma'
    },
    {
        character: 'み',
        romaji: 'mi'
    },
    {
        character: 'む',
        romaji: 'mu'
    },
    {
        character: 'め',
        romaji: 'me'
    },
    {
        character: 'も',
        romaji: 'mo'
    },
    {
        character: 'や',
        romaji: 'ya'
    },
    {
        character: 'ゆ',
        romaji: 'yu'
    },
    {
        character: 'よ',
        romaji: 'yo'
    },
    {
        character: 'ら',
        romaji: 'ra'
    },
    {
        character: 'り',
        romaji: 'ri'
    },
    {
        character: 'る',
        romaji: 'ru'
    },
    {
        character: 'れ',
        romaji: 're'
    },
    {
        character: 'ろ',
        romaji: 'ro'
    },
    {
        character: 'わ',
        romaji: 'wa'
    },
    {
        character: 'ん',
        romaji: 'n'
    }
];
const katakanaChart = [
    {
        character: 'ア',
        romaji: 'a'
    },
    {
        character: 'イ',
        romaji: 'i'
    },
    {
        character: 'ウ',
        romaji: 'u'
    },
    {
        character: 'エ',
        romaji: 'e'
    },
    {
        character: 'オ',
        romaji: 'o'
    },
    {
        character: 'カ',
        romaji: 'ka'
    },
    {
        character: 'キ',
        romaji: 'ki'
    },
    {
        character: 'ク',
        romaji: 'ku'
    },
    {
        character: 'ケ',
        romaji: 'ke'
    },
    {
        character: 'コ',
        romaji: 'ko'
    },
    {
        character: 'サ',
        romaji: 'sa'
    },
    {
        character: 'シ',
        romaji: 'shi'
    },
    {
        character: 'ス',
        romaji: 'su'
    },
    {
        character: 'セ',
        romaji: 'se'
    },
    {
        character: 'ソ',
        romaji: 'so'
    },
    {
        character: 'タ',
        romaji: 'ta'
    },
    {
        character: 'チ',
        romaji: 'chi'
    },
    {
        character: 'ツ',
        romaji: 'tsu'
    },
    {
        character: 'テ',
        romaji: 'te'
    },
    {
        character: 'ト',
        romaji: 'to'
    },
    {
        character: 'ナ',
        romaji: 'na'
    },
    {
        character: 'ニ',
        romaji: 'ni'
    },
    {
        character: 'ヌ',
        romaji: 'nu'
    },
    {
        character: 'ネ',
        romaji: 'ne'
    },
    {
        character: 'ノ',
        romaji: 'no'
    },
    {
        character: 'ハ',
        romaji: 'ha'
    },
    {
        character: 'ヒ',
        romaji: 'hi'
    },
    {
        character: 'フ',
        romaji: 'fu'
    },
    {
        character: 'ヘ',
        romaji: 'he'
    },
    {
        character: 'ホ',
        romaji: 'ho'
    },
    {
        character: 'マ',
        romaji: 'ma'
    },
    {
        character: 'ミ',
        romaji: 'mi'
    },
    {
        character: 'ム',
        romaji: 'mu'
    },
    {
        character: 'メ',
        romaji: 'me'
    },
    {
        character: 'モ',
        romaji: 'mo'
    },
    {
        character: 'ヤ',
        romaji: 'ya'
    },
    {
        character: 'ユ',
        romaji: 'yu'
    },
    {
        character: 'ヨ',
        romaji: 'yo'
    },
    {
        character: 'ラ',
        romaji: 'ra'
    },
    {
        character: 'リ',
        romaji: 'ri'
    },
    {
        character: 'ル',
        romaji: 'ru'
    },
    {
        character: 'レ',
        romaji: 're'
    },
    {
        character: 'ロ',
        romaji: 'ro'
    },
    {
        character: 'ワ',
        romaji: 'wa'
    },
    {
        character: 'ン',
        romaji: 'n'
    }
];
const basicKanji = [
    {
        character: '一',
        reading: 'いち',
        meaning: 'one'
    },
    {
        character: '二',
        reading: 'に',
        meaning: 'two'
    },
    {
        character: '三',
        reading: 'さん',
        meaning: 'three'
    },
    {
        character: '四',
        reading: 'よん',
        meaning: 'four'
    },
    {
        character: '五',
        reading: 'ご',
        meaning: 'five'
    },
    {
        character: '六',
        reading: 'ろく',
        meaning: 'six'
    },
    {
        character: '七',
        reading: 'なな',
        meaning: 'seven'
    },
    {
        character: '八',
        reading: 'はち',
        meaning: 'eight'
    },
    {
        character: '九',
        reading: 'きゅう',
        meaning: 'nine'
    },
    {
        character: '十',
        reading: 'じゅう',
        meaning: 'ten'
    },
    {
        character: '人',
        reading: 'ひと',
        meaning: 'person'
    },
    {
        character: '日',
        reading: 'ひ',
        meaning: 'day/sun'
    },
    {
        character: '月',
        reading: 'つき',
        meaning: 'month/moon'
    },
    {
        character: '火',
        reading: 'ひ',
        meaning: 'fire'
    },
    {
        character: '水',
        reading: 'みず',
        meaning: 'water'
    },
    {
        character: '木',
        reading: 'き',
        meaning: 'tree/wood'
    },
    {
        character: '金',
        reading: 'きん',
        meaning: 'gold/money'
    },
    {
        character: '土',
        reading: 'つち',
        meaning: 'earth/soil'
    },
    {
        character: '大',
        reading: 'おおき',
        meaning: 'big'
    },
    {
        character: '小',
        reading: 'ちいさ',
        meaning: 'small'
    }
];
const getVocabularyByCategory = (category)=>{
    return vocabularyDatabase.filter((word)=>word.category.toLowerCase() === category.toLowerCase());
};
const getVocabularyByJLPT = (level)=>{
    return vocabularyDatabase.filter((word)=>word.jlptLevel === level);
};
const getLessonsByCategory = (category)=>{
    return lessonDatabase.filter((lesson)=>lesson.category === category);
};
const getLessonsByDifficulty = (difficulty)=>{
    return lessonDatabase.filter((lesson)=>lesson.difficulty === difficulty);
};
const searchVocabulary = (query)=>{
    const lowercaseQuery = query.toLowerCase();
    return vocabularyDatabase.filter((word)=>word.japanese.includes(query) || word.hiragana.includes(query) || word.romaji.toLowerCase().includes(lowercaseQuery) || word.english.toLowerCase().includes(lowercaseQuery) || word.category.toLowerCase().includes(lowercaseQuery));
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/lesson/[id]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>LessonDetailPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/progress.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$japanese$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/japanese-data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function LessonDetailPage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const lessonId = params.id;
    const [lesson, setLesson] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [completedSteps, setCompletedSteps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LessonDetailPage.useEffect": ()=>{
            const foundLesson = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$japanese$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lessonDatabase"].find({
                "LessonDetailPage.useEffect.foundLesson": (l)=>l.id === lessonId
            }["LessonDetailPage.useEffect.foundLesson"]);
            if (foundLesson) {
                setLesson(foundLesson);
            } else {
                router.push('/');
            }
        }
    }["LessonDetailPage.useEffect"], [
        lessonId,
        router
    ]);
    if (!lesson) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-screen",
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/src/app/lesson/[id]/page.tsx",
            lineNumber: 32,
            columnNumber: 12
        }, this);
    }
    const steps = [
        {
            title: 'Introduction',
            content: lesson.content.introduction
        },
        {
            title: 'Key Points',
            content: lesson.content.keyPoints
        },
        {
            title: 'Examples',
            content: lesson.content.examples
        },
        {
            title: 'Practice',
            content: lesson.content.exercises
        }
    ];
    const handleStepComplete = ()=>{
        if (!completedSteps.includes(currentStep)) {
            setCompletedSteps([
                ...completedSteps,
                currentStep
            ]);
        }
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };
    const handlePreviousStep = ()=>{
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };
    const playAudio = (text)=>{
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'ja-JP';
            utterance.rate = 0.8;
            speechSynthesis.speak(utterance);
        }
    };
    const progress = completedSteps.length / steps.length * 100;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-pink-50 to-blue-50 dark:from-gray-900 dark:to-gray-800",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-md mx-auto px-4 py-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "sm",
                            onClick: ()=>router.push('/'),
                            className: "mr-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/lesson/[id]/page.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-xl font-bold",
                                    children: lesson.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg font-bold text-pink-600 dark:text-pink-400",
                                    children: lesson.titleJapanese
                                }, void 0, false, {
                                    fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/lesson/[id]/page.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/lesson/[id]/page.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: "mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                className: "text-base",
                                children: "Lesson Progress"
                            }, void 0, false, {
                                fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                                value: progress,
                                className: "mt-2"
                            }, void 0, false, {
                                fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600 dark:text-gray-400 mt-1",
                                children: [
                                    completedSteps.length,
                                    " of ",
                                    steps.length,
                                    " steps completed"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/lesson/[id]/page.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/lesson/[id]/page.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between mb-6",
                    children: steps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex-1 text-center px-2 py-1 rounded-lg text-xs ${index === currentStep ? 'bg-blue-500 text-white' : completedSteps.includes(index) ? 'bg-green-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`,
                            children: step.title
                        }, index, false, {
                            fileName: "[project]/src/app/lesson/[id]/page.tsx",
                            lineNumber: 102,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/lesson/[id]/page.tsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: "mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-lg",
                                    children: steps[currentStep].title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            className: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
                                            children: lesson.difficulty
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                            lineNumber: 122,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            className: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
                                            children: lesson.jlptLevel
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                            lineNumber: 125,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/lesson/[id]/page.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            children: [
                                currentStep === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-700 dark:text-gray-300",
                                            children: lesson.content.introduction
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                            lineNumber: 134,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-600 dark:text-gray-400",
                                            children: [
                                                "Estimated time: ",
                                                lesson.estimatedTime,
                                                " minutes"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                            lineNumber: 135,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, this),
                                currentStep === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold",
                                            children: "Key Points to Remember:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                            lineNumber: 143,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2",
                                            children: lesson.content.keyPoints.map((point, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-start",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                            className: "w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                                            lineNumber: 147,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm",
                                                            children: point
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                                            lineNumber: 148,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                            lineNumber: 144,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                    lineNumber: 142,
                                    columnNumber: 15
                                }, this),
                                currentStep === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold",
                                            children: "Examples:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                            lineNumber: 157,
                                            columnNumber: 17
                                        }, this),
                                        lesson.content.examples.map((example, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                className: "p-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-lg font-bold text-pink-600 dark:text-pink-400",
                                                            children: example.japanese
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                                            lineNumber: 161,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm text-gray-600 dark:text-gray-400",
                                                            children: example.hiragana
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                                            lineNumber: 164,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm",
                                                            children: example.english
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                                            lineNumber: 167,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            size: "sm",
                                                            variant: "outline",
                                                            onClick: ()=>playAudio(example.japanese),
                                                            className: "mt-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                                    className: "w-3 h-3 mr-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                                                    lineNumber: 174,
                                                                    columnNumber: 25
                                                                }, this),
                                                                "Play Audio"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                                            lineNumber: 168,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 21
                                                }, this)
                                            }, index, false, {
                                                fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                                lineNumber: 159,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                    lineNumber: 156,
                                    columnNumber: 15
                                }, this),
                                currentStep === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold",
                                            children: "Practice Exercises:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                            lineNumber: 185,
                                            columnNumber: 17
                                        }, this),
                                        lesson.content.exercises.map((exercise, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                className: "p-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-medium",
                                                            children: exercise.question
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                                            lineNumber: 189,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2",
                                                            children: exercise.options.map((option, optIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-2 border rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer",
                                                                    children: option
                                                                }, optIndex, false, {
                                                                    fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                                                    lineNumber: 192,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                                            lineNumber: 190,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-600 dark:text-gray-400",
                                                            children: exercise.explanation
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                                    lineNumber: 188,
                                                    columnNumber: 21
                                                }, this)
                                            }, index, false, {
                                                fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                                lineNumber: 187,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                    lineNumber: 184,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/lesson/[id]/page.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/lesson/[id]/page.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            onClick: handlePreviousStep,
                            disabled: currentStep === 0,
                            className: "flex-1",
                            children: "Previous"
                        }, void 0, false, {
                            fileName: "[project]/src/app/lesson/[id]/page.tsx",
                            lineNumber: 213,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: handleStepComplete,
                            disabled: currentStep === steps.length - 1,
                            className: "flex-1",
                            children: currentStep === steps.length - 1 ? 'Complete Lesson' : 'Next Step'
                        }, void 0, false, {
                            fileName: "[project]/src/app/lesson/[id]/page.tsx",
                            lineNumber: 221,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/lesson/[id]/page.tsx",
                    lineNumber: 212,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/lesson/[id]/page.tsx",
            lineNumber: 71,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/lesson/[id]/page.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_s(LessonDetailPage, "YdmcUlU/uSn6+WG5MGnoLphv+Ng=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = LessonDetailPage;
var _c;
__turbopack_context__.k.register(_c, "LessonDetailPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_d6146844._.js.map