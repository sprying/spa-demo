define("app/exts/arale/events",function(){function t(){}function r(t,r,e){var n=!0;if(t){var o=0,i=t.length,s=r[0],f=r[1],a=r[2];switch(r.length){case 0:for(;o<i;o+=2)n=!1!==t[o].call(t[o+1]||e)&&n;break;case 1:for(;o<i;o+=2)n=!1!==t[o].call(t[o+1]||e,s)&&n;break;case 2:for(;o<i;o+=2)n=!1!==t[o].call(t[o+1]||e,s,f)&&n;break;case 3:for(;o<i;o+=2)n=!1!==t[o].call(t[o+1]||e,s,f,a)&&n;break;default:for(;o<i;o+=2)n=!1!==t[o].apply(t[o+1]||e,r)&&n}}return n}function e(t){return"[object Function]"===Object.prototype.toString.call(t)}t.prototype.on=function(t,r,e){var n,o,i;if(!r)return this;for(n=this.__events||(this.__events={}),t=t.split(/\s+/);o=t.shift();)i=n[o]||(n[o]=[]),i.push(r,e);return this},t.prototype.once=function(t,r,e){var n=this,o=function(){n.off(t,o),r.apply(e||n,arguments)};return this.on(t,o,e)},t.prototype.off=function(t,r,e){var o,i,s,f;if(!(o=this.__events))return this;if(!(t||r||e))return delete this.__events,this;for(t=t?t.split(/\s+/):n(o);i=t.shift();)if(s=o[i])if(r||e)for(f=s.length-2;f>=0;f-=2)r&&s[f]!==r||e&&s[f+1]!==e||s.splice(f,2);else delete o[i];return this},t.prototype.trigger=function(t){var e,n,o,i,s,f,a=[],p=!0;if(!(e=this.__events))return this;for(t=t.split(/\s+/),s=1,f=arguments.length;s<f;s++)a[s-1]=arguments[s];for(;n=t.shift();)(o=e.all)&&(o=o.slice()),(i=e[n])&&(i=i.slice()),"all"!==n&&(p=r(i,a,this)&&p),p=r(o,[n].concat(a),this)&&p;return p},t.prototype.emit=t.prototype.trigger;var n=Object.keys;return n||(n=function(t){var r=[];for(var e in t)t.hasOwnProperty(e)&&r.push(e);return r}),t.mixTo=function(r){var n=t.prototype;if(e(r)){for(var o in n)n.hasOwnProperty(o)&&(r.prototype[o]=n[o]);Object.keys(n).forEach(function(t){r.prototype[t]=n[t]})}else{var i=new t;for(var o in n)n.hasOwnProperty(o)&&function(t){r[t]=function(){return n[t].apply(i,Array.prototype.slice.call(arguments)),this}}(o)}},t});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dHMvYXJhbGUvZXZlbnRzLmpzIl0sIm5hbWVzIjpbImRlZmluZSIsIkV2ZW50cyIsInRyaWdnZXJFdmVudHMiLCJsaXN0IiwiYXJncyIsImNvbnRleHQiLCJwYXNzIiwiaSIsImwiLCJsZW5ndGgiLCJhMSIsImEyIiwiYTMiLCJjYWxsIiwiYXBwbHkiLCJpc0Z1bmN0aW9uIiwiZnVuYyIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwib24iLCJldmVudHMiLCJjYWxsYmFjayIsImNhY2hlIiwiZXZlbnQiLCJ0aGlzIiwiX19ldmVudHMiLCJzcGxpdCIsInNoaWZ0IiwicHVzaCIsIm9uY2UiLCJ0aGF0IiwiY2IiLCJvZmYiLCJhcmd1bWVudHMiLCJrZXlzIiwic3BsaWNlIiwidHJpZ2dlciIsImFsbCIsImxlbiIsInJlc3QiLCJyZXR1cm5lZCIsInNsaWNlIiwiY29uY2F0IiwiZW1pdCIsIm8iLCJyZXN1bHQiLCJuYW1lIiwiaGFzT3duUHJvcGVydHkiLCJtaXhUbyIsInJlY2VpdmVyIiwicHJvdG8iLCJrZXkiLCJmb3JFYWNoIiwiQXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBQSxPQUFPLHdCQUF5QixXQXFCOUIsUUFBU0MsTUEySlQsUUFBU0MsR0FBY0MsRUFBTUMsRUFBTUMsR0FDakMsR0FBSUMsSUFBTyxDQUVYLElBQUlILEVBQU0sQ0FDUixHQUFJSSxHQUFJLEVBQUdDLEVBQUlMLEVBQUtNLE9BQVFDLEVBQUtOLEVBQUssR0FBSU8sRUFBS1AsRUFBSyxHQUFJUSxFQUFLUixFQUFLLEVBR2xFLFFBQVFBLEVBQUtLLFFBQ1gsSUFBSyxHQUFHLEtBQU9GLEVBQUlDLEVBQUdELEdBQUssRUFBSUQsR0FBZ0QsSUFBekNILEVBQUtJLEdBQUdNLEtBQUtWLEVBQUtJLEVBQUksSUFBTUYsSUFBc0JDLENBQU0sTUFDOUYsS0FBSyxHQUFHLEtBQU9DLEVBQUlDLEVBQUdELEdBQUssRUFBSUQsR0FBb0QsSUFBN0NILEVBQUtJLEdBQUdNLEtBQUtWLEVB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VUFBVW1CLE9BTXpDLElBQUlGLEdBQU9sQixPQUFPa0IsSUFzRWxCLE9BcEVLQSxLQUNIQSxFQUFPLFNBQVNVLEdBQ2QsR0FBSUMsS0FFSixLQUFLLEdBQUlDLEtBQVFGLEdBQ1hBLEVBQUVHLGVBQWVELElBQ25CRCxFQUFPakIsS0FBS2tCLEVBR2hCLE9BQU9ELEtBS1g3QyxFQUFPZ0QsTUFBUSxTQUFTQyxHQUN0QixHQUFJQyxHQUFRbEQsRUFBT2lCLFNBRW5CLElBQUlILEVBQVdtQyxHQUFXLENBQ3hCLElBQUssR0FBSUUsS0FBT0QsR0FDVkEsRUFBTUgsZUFBZUksS0FDdkJGLEVBQVNoQyxVQUFVa0MsR0FBT0QsRUFBTUMsR0FHcENuQyxRQUFPa0IsS0FBS2dCLEdBQU9FLFFBQVEsU0FBU0QsR0FDbENGLEVBQVNoQyxVQUFVa0MsR0FBT0QsRUFBTUMsU0FHL0IsQ0FDSCxHQUFJNUIsR0FBUSxHQUFJdkIsRUFDaEIsS0FBSyxHQUFJbUQsS0FBT0QsR0FDVkEsRUFBTUgsZUFBZUksSUFNN0IsU0FBbUJBLEdBQ2pCRixFQUFTRSxHQUFPLFdBRWQsTUFEQUQsR0FBTUMsR0FBS3RDLE1BQU1VLEVBQU84QixNQUFNcEMsVUFBVXdCLE1BQU03QixLQUFLcUIsWUFDNUNULE9BUksyQixLQXFDWG5EIiwiZmlsZSI6ImV4dHMvYXJhbGUvZXZlbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZGVmaW5lKCdhcHAvZXh0cy9hcmFsZS9ldmVudHMnLCBmdW5jdGlvbiAoKSB7XG4gIC8vIEV2ZW50c1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBUaGFua3MgdG86XG4gIC8vICAtIGh0dHBzOi8vZ2l0aHViLmNvbS9kb2N1bWVudGNsb3VkL2JhY2tib25lL2Jsb2IvbWFzdGVyL2JhY2tib25lLmpzXG4gIC8vICAtIGh0dHBzOi8vZ2l0aHViLmNvbS9qb3llbnQvbm9kZS9ibG9iL21hc3Rlci9saWIvZXZlbnRzLmpzXG5cblxuICAvLyBSZWd1bGFyIGV4cHJlc3Npb24gdXNlZCB0byBzcGxpdCBldmVudCBzdHJpbmdzXG4gIHZhciBldmVudFNwbGl0dGVyID0gL1xccysvXG5cblxuICAvLyBBIG1vZHVsZSB0aGF0IGNhbiBiZSBtaXhlZCBpbiB0byAqYW55IG9iamVjdCogaW4gb3JkZXIgdG8gcHJvdmlkZSBpdFxuICAvLyB3aXRoIGN1c3RvbSBldmVudHMuIFlvdSBtYXkgYmluZCB3aXRoIGBvbmAgb3IgcmVtb3ZlIHdpdGggYG9mZmAgY2FsbGJhY2tcbiAgLy8gZnVuY3Rpb25zIHRvIGFuIGV2ZW50OyBgdHJpZ2dlcmAtaW5nIGFuIGV2ZW50IGZpcmVzIGFsbCBjYWxsYmFja3MgaW5cbiAgLy8gc3VjY2Vzc2lvbi5cbiAgLy9cbiAgLy8gICAgIHZhciBvYmplY3QgPSBuZXcgRXZlbnRzKClcbiAgLy8gICAgIG9iamVjdC5vbignZXhwYW5kJywgZnVuY3Rpb24oKXsgYWxlcnQoJ2V4cGFuZGVkJykgfSlcbiAgLy8gICAgIG9iamVjdC50cmlnZ2VyKCdleHBhbmQnKVxuICAvL1xuICBmdW5jdGlvbiBFdmVudHMoKSB7XG4gIH1cblxuXG4gIC8vIEJpbmQgb25lIG9yIG1vcmUgc3BhY2Ugc2VwYXJhdGVkIGV2ZW50cywgYGV2ZW50c2AsIHRvIGEgYGNhbGxiYWNrYFxuICAvLyBmdW5jdGlvbi4gUGFzc2luZyBgXCJhbGxcImAgd2lsbCBiaW5kIHRoZSBjYWxsYmFjayB0byBhbGwgZXZlbnRzIGZpcmVkLlxuICBFdmVudHMucHJvdG90eXBlLm9uID0gZnVuY3Rpb24oZXZlbnRzLCBjYWxsYmFjaywgY29udGV4dCkge1xuICAgIHZhciBjYWNoZSwgZXZlbnQsIGxpc3RcbiAgICBpZiAoIWNhbGxiYWNrKSByZXR1cm4gdGhpc1xuXG4gICAgY2FjaGUgPSB0aGlzLl9fZXZlbnRzIHx8ICh0aGlzLl9fZXZlbnRzID0ge30pXG4gICAgZXZlbnRzID0gZXZlbnRzLnNwbGl0KGV2ZW50U3BsaXR0ZXIpXG5cbiAgICB3aGlsZSAoZXZlbnQgPSBldmVudHMuc2hpZnQoKSkge1xuICAgICAgbGlzdCA9IGNhY2hlW2V2ZW50XSB8fCAoY2FjaGVbZXZlbnRdID0gW10pXG4gICAgICBsaXN0LnB1c2goY2FsbGJhY2ssIGNvbnRleHQpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIEV2ZW50cy5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uKGV2ZW50cywgY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXNcbiAgICB2YXIgY2IgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRoYXQub2ZmKGV2ZW50cywgY2IpXG4gICAgICBjYWxsYmFjay5hcHBseShjb250ZXh0IHx8IHRoYXQsIGFyZ3VtZW50cylcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMub24oZXZlbnRzLCBjYiwgY29udGV4dClcbiAgfVxuXG4gIC8vIFJlbW92ZSBvbmUgb3IgbWFueSBjYWxsYmFja3MuIElmIGBjb250ZXh0YCBpcyBudWxsLCByZW1vdmVzIGFsbCBjYWxsYmFja3NcbiAgLy8gd2l0aCB0aGF0IGZ1bmN0aW9uLiBJZiBgY2FsbGJhY2tgIGlzIG51bGwsIHJlbW92ZXMgYWxsIGNhbGxiYWNrcyBmb3IgdGhlXG4gIC8vIGV2ZW50LiBJZiBgZXZlbnRzYCBpcyBudWxsLCByZW1vdmVzIGFsbCBib3VuZCBjYWxsYmFja3MgZm9yIGFsbCBldmVudHMuXG4gIEV2ZW50cy5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24oZXZlbnRzLCBjYWxsYmFjaywgY29udGV4dCkge1xuICAgIHZhciBjYWNoZSwgZXZlbnQsIGxpc3QsIGlcblxuICAgIC8vIE5vIGV2ZW50cywgb3IgcmVtb3ZpbmcgKmFsbCogZXZlbnRzLlxuICAgIGlmICghKGNhY2hlID0gdGhpcy5fX2V2ZW50cykpIHJldHVybiB0aGlzXG4gICAgaWYgKCEoZXZlbnRzIHx8IGNhbGxiYWNrIHx8IGNvbnRleHQpKSB7XG4gICAgICBkZWxldGUgdGhpcy5fX2V2ZW50c1xuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBldmVudHMgPSBldmVudHMgPyBldmVudHMuc3BsaXQoZXZlbnRTcGxpdHRlcikgOiBrZXlzKGNhY2hlKVxuXG4gICAgLy8gTG9vcCB0aHJvdWdoIHRoZSBjYWxsYmFjayBsaXN0LCBzcGxpY2luZyB3aGVyZSBhcHByb3ByaWF0ZS5cbiAgICB3aGlsZSAoZXZlbnQgPSBldmVudHMuc2hpZnQoKSkge1xuICAgICAgbGlzdCA9IGNhY2hlW2V2ZW50XVxuICAgICAgaWYgKCFsaXN0KSBjb250aW51ZVxuXG4gICAgICBpZiAoIShjYWxsYmFjayB8fCBjb250ZXh0KSkge1xuICAgICAgICBkZWxldGUgY2FjaGVbZXZlbnRdXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGZvciAoaSA9IGxpc3QubGVuZ3RoIC0gMjsgaSA+PSAwOyBpIC09IDIpIHtcbiAgICAgICAgaWYgKCEoY2FsbGJhY2sgJiYgbGlzdFtpXSAhPT0gY2FsbGJhY2sgfHxcbiAgICAgICAgICAgIGNvbnRleHQgJiYgbGlzdFtpICsgMV0gIT09IGNvbnRleHQpKSB7XG4gICAgICAgICAgbGlzdC5zcGxpY2UoaSwgMilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuXG4gIC8vIFRyaWdnZXIgb25lIG9yIG1hbnkgZXZlbnRzLCBmaXJpbmcgYWxsIGJvdW5kIGNhbGxiYWNrcy4gQ2FsbGJhY2tzIGFyZVxuICAvLyBwYXNzZWQgdGhlIHNhbWUgYXJndW1lbnRzIGFzIGB0cmlnZ2VyYCBpcywgYXBhcnQgZnJvbSB0aGUgZXZlbnQgbmFtZVxuICAvLyAodW5sZXNzIHlvdSdyZSBsaXN0ZW5pbmcgb24gYFwiYWxsXCJgLCB3aGljaCB3aWxsIGNhdXNlIHlvdXIgY2FsbGJhY2sgdG9cbiAgLy8gcmVjZWl2ZSB0aGUgdHJ1ZSBuYW1lIG9mIHRoZSBldmVudCBhcyB0aGUgZmlyc3QgYXJndW1lbnQpLlxuICBFdmVudHMucHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbihldmVudHMpIHtcbiAgICB2YXIgY2FjaGUsIGV2ZW50LCBhbGwsIGxpc3QsIGksIGxlbiwgcmVzdCA9IFtdLCBhcmdzLCByZXR1cm5lZCA9IHRydWVcbiAgICBpZiAoIShjYWNoZSA9IHRoaXMuX19ldmVudHMpKSByZXR1cm4gdGhpc1xuXG4gICAgZXZlbnRzID0gZXZlbnRzLnNwbGl0KGV2ZW50U3BsaXR0ZXIpXG5cbiAgICAvLyBGaWxsIHVwIGByZXN0YCB3aXRoIHRoZSBjYWxsYmFjayBhcmd1bWVudHMuICBTaW5jZSB3ZSdyZSBvbmx5IGNvcHlpbmdcbiAgICAvLyB0aGUgdGFpbCBvZiBgYXJndW1lbnRzYCwgYSBsb29wIGlzIG11Y2ggZmFzdGVyIHRoYW4gQXJyYXkjc2xpY2UuXG4gICAgZm9yIChpID0gMSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICByZXN0W2kgLSAxXSA9IGFyZ3VtZW50c1tpXVxuICAgIH1cblxuICAgIC8vIEZvciBlYWNoIGV2ZW50LCB3YWxrIHRocm91Z2ggdGhlIGxpc3Qgb2YgY2FsbGJhY2tzIHR3aWNlLCBmaXJzdCB0b1xuICAgIC8vIHRyaWdnZXIgdGhlIGV2ZW50LCB0aGVuIHRvIHRyaWdnZXIgYW55IGBcImFsbFwiYCBjYWxsYmFja3MuXG4gICAgd2hpbGUgKGV2ZW50ID0gZXZlbnRzLnNoaWZ0KCkpIHtcbiAgICAgIC8vIENvcHkgY2FsbGJhY2sgbGlzdHMgdG8gcHJldmVudCBtb2RpZmljYXRpb24uXG4gICAgICBpZiAoYWxsID0gY2FjaGUuYWxsKSBhbGwgPSBhbGwuc2xpY2UoKVxuICAgICAgaWYgKGxpc3QgPSBjYWNoZVtldmVudF0pIGxpc3QgPSBsaXN0LnNsaWNlKClcblxuICAgICAgLy8gRXhlY3V0ZSBldmVudCBjYWxsYmFja3MgZXhjZXB0IG9uZSBuYW1lZCBcImFsbFwiXG4gICAgICBpZiAoZXZlbnQgIT09ICdhbGwnKSB7XG4gICAgICAgIHJldHVybmVkID0gdHJpZ2dlckV2ZW50cyhsaXN0LCByZXN0LCB0aGlzKSAmJiByZXR1cm5lZFxuICAgICAgfVxuXG4gICAgICAvLyBFeGVjdXRlIFwiYWxsXCIgY2FsbGJhY2tzLlxuICAgICAgcmV0dXJuZWQgPSB0cmlnZ2VyRXZlbnRzKGFsbCwgW2V2ZW50XS5jb25jYXQocmVzdCksIHRoaXMpICYmIHJldHVybmVkXG4gICAgfVxuXG4gICAgcmV0dXJuIHJldHVybmVkXG4gIH1cblxuICBFdmVudHMucHJvdG90eXBlLmVtaXQgPSBFdmVudHMucHJvdG90eXBlLnRyaWdnZXJcblxuXG4gIC8vIEhlbHBlcnNcbiAgLy8gLS0tLS0tLVxuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXNcblxuICBpZiAoIWtleXMpIHtcbiAgICBrZXlzID0gZnVuY3Rpb24obykge1xuICAgICAgdmFyIHJlc3VsdCA9IFtdXG5cbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbykge1xuICAgICAgICBpZiAoby5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKG5hbWUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG4gIH1cblxuICAvLyBNaXggYEV2ZW50c2AgdG8gb2JqZWN0IGluc3RhbmNlIG9yIENsYXNzIGZ1bmN0aW9uLlxuICBFdmVudHMubWl4VG8gPSBmdW5jdGlvbihyZWNlaXZlcikge1xuICAgIHZhciBwcm90byA9IEV2ZW50cy5wcm90b3R5cGVcblxuICAgIGlmIChpc0Z1bmN0aW9uKHJlY2VpdmVyKSkge1xuICAgICAgZm9yICh2YXIga2V5IGluIHByb3RvKSB7XG4gICAgICAgIGlmIChwcm90by5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgcmVjZWl2ZXIucHJvdG90eXBlW2tleV0gPSBwcm90b1trZXldXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIE9iamVjdC5rZXlzKHByb3RvKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICByZWNlaXZlci5wcm90b3R5cGVba2V5XSA9IHByb3RvW2tleV1cbiAgICAgIH0pXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdmFyIGV2ZW50ID0gbmV3IEV2ZW50c1xuICAgICAgZm9yICh2YXIga2V5IGluIHByb3RvKSB7XG4gICAgICAgIGlmIChwcm90by5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgY29weVByb3RvKGtleSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvcHlQcm90byhrZXkpIHtcbiAgICAgIHJlY2VpdmVyW2tleV0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcHJvdG9ba2V5XS5hcHBseShldmVudCwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSlcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBFeGVjdXRlIGNhbGxiYWNrc1xuICBmdW5jdGlvbiB0cmlnZ2VyRXZlbnRzKGxpc3QsIGFyZ3MsIGNvbnRleHQpIHtcbiAgICB2YXIgcGFzcyA9IHRydWVcblxuICAgIGlmIChsaXN0KSB7XG4gICAgICB2YXIgaSA9IDAsIGwgPSBsaXN0Lmxlbmd0aCwgYTEgPSBhcmdzWzBdLCBhMiA9IGFyZ3NbMV0sIGEzID0gYXJnc1syXVxuICAgICAgLy8gY2FsbCBpcyBmYXN0ZXIgdGhhbiBhcHBseSwgb3B0aW1pemUgbGVzcyB0aGFuIDMgYXJndVxuICAgICAgLy8gaHR0cDovL2Jsb2cuY3Nkbi5uZXQvemhlbmd5aW5odWkxMDAvYXJ0aWNsZS9kZXRhaWxzLzc4MzcxMjdcbiAgICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOiBmb3IgKDsgaSA8IGw7IGkgKz0gMikge3Bhc3MgPSBsaXN0W2ldLmNhbGwobGlzdFtpICsgMV0gfHwgY29udGV4dCkgIT09IGZhbHNlICYmIHBhc3N9IGJyZWFrXG4gICAgICAgIGNhc2UgMTogZm9yICg7IGkgPCBsOyBpICs9IDIpIHtwYXNzID0gbGlzdFtpXS5jYWxsKGxpc3RbaSArIDFdIHx8IGNvbnRleHQsIGExKSAhPT0gZmFsc2UgJiYgcGFzc30gYnJlYWtcbiAgICAgICAgY2FzZSAyOiBmb3IgKDsgaSA8IGw7IGkgKz0gMikge3Bhc3MgPSBsaXN0W2ldLmNhbGwobGlzdFtpICsgMV0gfHwgY29udGV4dCwgYTEsIGEyKSAhPT0gZmFsc2UgJiYgcGFzc30gYnJlYWtcbiAgICAgICAgY2FzZSAzOiBmb3IgKDsgaSA8IGw7IGkgKz0gMikge3Bhc3MgPSBsaXN0W2ldLmNhbGwobGlzdFtpICsgMV0gfHwgY29udGV4dCwgYTEsIGEyLCBhMykgIT09IGZhbHNlICYmIHBhc3N9IGJyZWFrXG4gICAgICAgIGRlZmF1bHQ6IGZvciAoOyBpIDwgbDsgaSArPSAyKSB7cGFzcyA9IGxpc3RbaV0uYXBwbHkobGlzdFtpICsgMV0gfHwgY29udGV4dCwgYXJncykgIT09IGZhbHNlICYmIHBhc3N9IGJyZWFrXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHRyaWdnZXIgd2lsbCByZXR1cm4gZmFsc2UgaWYgb25lIG9mIHRoZSBjYWxsYmFja3MgcmV0dXJuIGZhbHNlXG4gICAgcmV0dXJuIHBhc3NcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRnVuY3Rpb24oZnVuYykge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZnVuYykgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSdcbiAgfVxuXG4gIHJldHVybiBFdmVudHNcbn0pIl19
