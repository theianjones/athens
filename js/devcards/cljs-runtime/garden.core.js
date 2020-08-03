goog.provide('garden.core');
goog.require('cljs.core');
goog.require('garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
garden.core.css = (function garden$core$css(var_args){
var args__4795__auto__ = [];
var len__4789__auto___40996 = arguments.length;
var i__4790__auto___40997 = (0);
while(true){
if((i__4790__auto___40997 < len__4789__auto___40996)){
args__4795__auto__.push((arguments[i__4790__auto___40997]));

var G__40998 = (i__4790__auto___40997 + (1));
i__4790__auto___40997 = G__40998;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(garden.compiler.compile_css,rules);
}));

(garden.core.css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(garden.core.css.cljs$lang$applyTo = (function (seq40994){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40994));
}));

/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
garden.core.style = (function garden$core$style(var_args){
var args__4795__auto__ = [];
var len__4789__auto___40999 = arguments.length;
var i__4790__auto___41000 = (0);
while(true){
if((i__4790__auto___41000 < len__4789__auto___40999)){
args__4795__auto__.push((arguments[i__4790__auto___41000]));

var G__41001 = (i__4790__auto___41000 + (1));
i__4790__auto___41000 = G__41001;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return garden.compiler.compile_style(maps);
}));

(garden.core.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(garden.core.style.cljs$lang$applyTo = (function (seq40995){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40995));
}));


//# sourceMappingURL=garden.core.js.map
