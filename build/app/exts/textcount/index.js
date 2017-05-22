define("app/exts/textcount/index",["jquery","underscore","brix/base","css!app/exts/textcount/index.css"],function(n,t,e){return e.extend({options:{input:null,trueLength:!1,count:null,valid:!0},init:function(){var t=this,e=t.options,u=n(t.element),o=n(e.input);t.handle=function(){setTimeout(function(){u.html(t._countResult(o.val()))},100)},o.length>0&&(t.handle(),o.on("keyup",t.handle),o.on("paste",t.handle))},_count:function(n){return this.options.trueLength&&(n=n.replace(/[\u4e00-\u9fa5]/g,"**")),n.length},_countResult:function(n){var t=this,e=t.options,u=t._count(n),o=e.count,i=u;return u>o?(i='<em class="text-count-error">'+u+"</em>",t.valid=!1):t.valid=!0,i+"/"+o},isValid:function(){return this.valid},destroy:function(){var t=this,e=n(t.options.input);e.off("keyup",t.handle),e.off("paste",t.handle),e=null}})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dHMvdGV4dGNvdW50L2luZGV4LmpzIl0sIm5hbWVzIjpbImRlZmluZSIsIiQiLCJfIiwiQnJpY2siLCJleHRlbmQiLCJvcHRpb25zIiwiaW5wdXQiLCJ0cnVlTGVuZ3RoIiwiY291bnQiLCJ2YWxpZCIsImluaXQiLCJtZSIsInRoaXMiLCIkZWwiLCJlbGVtZW50IiwiaGFuZGxlIiwic2V0VGltZW91dCIsImh0bWwiLCJfY291bnRSZXN1bHQiLCJ2YWwiLCJsZW5ndGgiLCJvbiIsIl9jb3VudCIsInN0ciIsInJlcGxhY2UiLCJsZW4iLCJwcmUiLCJpc1ZhbGlkIiwiZGVzdHJveSIsIm9mZiJdLCJtYXBwaW5ncyI6IkFBQUFBLE9BQ0UsNEJBRUUsU0FDQSxhQUNBLFlBQ0Esb0NBQ0EsU0FBVUMsRUFBR0MsRUFBR0MsR0FDaEIsTUFBT0EsR0FBTUMsUUFDWEMsU0FDRUMsTUFBTyxLQUNQQyxZQUFZLEVBQ1pDLE1BQU8sS0FDUEMsT0FBTyxHQUVUQyxLQUFNLFdBQ0osR0FBSUMsR0FBS0MsS0FDTFAsRUFBVU0sRUFBR04sUUFDYlEsRUFBTVosRUFBRVUsRUFBR0csU0FDWFIsRUFBUUwsRUFBRUksRUFBUUMsTUFFdEJLLEdBQUdJLE9BQVMsV0FFVkMsV0FBVyxXQUNUSCxFQUFJSSxLQUFLTixFQUFHTyxhQUFhWixFQUFNYSxTQUM5QixNQUdEYixFQUFNYyxPQUFTLElBRWpCVCxFQUFHSSxTQUVIVCxFQUFNZSxHQUFHLFFBQVNWLEVBQUdJLFFBQ3JCVCxFQUFNZSxHQUFHLFFBQVNWLEVBQUdJLFVBR3pCTyxPQUFRLFNBQVVDLEdBVWhCLE1BVFNYLE1BQ1FQLFFBQ1FFLGFBSXZCZ0IsRUFBTUEsRUFBSUMsUUFBUSxtQkFBb0IsT0FHakNELEVBQUlILFFBRWJGLGFBQWMsU0FBVUssR0FDdEIsR0FBSVosR0FBS0MsS0FDTFAsRUFBVU0sRUFBR04sUUFDYm9CLEVBQU1kLEVBQUdXLE9BQU9DLEdBQ2hCZixFQUFRSCxFQUFRRyxNQUNoQmtCLEVBQU1ELENBT1YsT0FOSUEsR0FBTWpCLEdBQ05rQixFQUFNLGdDQUFrQ0QsRUFBTSxRQUM5Q2QsRUFBR0YsT0FBUSxHQUVYRSxFQUFHRixPQUFRLEVBRVJpQixFQUFNLElBQU1sQixHQUVyQm1CLFFBQVMsV0FDUCxNQUFPZixNQUFLSCxPQUVkbUIsUUFBUyxXQUNQLEdBQUlqQixHQUFLQyxLQUNMTixFQUFRTCxFQUFFVSxFQUFHTixRQUFRQyxNQUN6QkEsR0FBTXVCLElBQUksUUFBU2xCLEVBQUdJLFFBQ3RCVCxFQUFNdUIsSUFBSSxRQUFTbEIsRUFBR0ksUUFDdEJULEVBQVEiLCJmaWxlIjoiZXh0cy90ZXh0Y291bnQvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJkZWZpbmUoXG4gICdhcHAvZXh0cy90ZXh0Y291bnQvaW5kZXgnLFxuICBbXG4gICAgJ2pxdWVyeScsXG4gICAgJ3VuZGVyc2NvcmUnLFxuICAgICdicml4L2Jhc2UnLFxuICAgICdjc3MhYXBwL2V4dHMvdGV4dGNvdW50L2luZGV4LmNzcydcbiAgXSxmdW5jdGlvbiAoJCwgXywgQnJpY2spIHtcbiAgICByZXR1cm4gQnJpY2suZXh0ZW5kKHtcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgaW5wdXQ6IG51bGwsXG4gICAgICAgIHRydWVMZW5ndGg6IGZhbHNlLFxuICAgICAgICBjb3VudDogbnVsbCxcbiAgICAgICAgdmFsaWQ6IHRydWVcbiAgICAgIH0sXG4gICAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1lID0gdGhpc1xuICAgICAgICB2YXIgb3B0aW9ucyA9IG1lLm9wdGlvbnNcbiAgICAgICAgdmFyICRlbCA9ICQobWUuZWxlbWVudClcbiAgICAgICAgdmFyIGlucHV0ID0gJChvcHRpb25zLmlucHV0KVxuXG4gICAgICAgIG1lLmhhbmRsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyDpvKDmoIfnspjotLTkuovku7bvvIzopoHlu7bov5/miY3og73ojrflj5bmlrDnmoR2YWx1ZVxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJGVsLmh0bWwobWUuX2NvdW50UmVzdWx0KGlucHV0LnZhbCgpKSlcbiAgICAgICAgICB9LCAxMDApXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5wdXQubGVuZ3RoID4gMCkge1xuICAgICAgICAgIC8vIOWIneWni+WMluaVsOaNrlxuICAgICAgICAgIG1lLmhhbmRsZSgpXG5cbiAgICAgICAgICBpbnB1dC5vbigna2V5dXAnLCBtZS5oYW5kbGUpXG4gICAgICAgICAgaW5wdXQub24oJ3Bhc3RlJywgbWUuaGFuZGxlKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX2NvdW50OiBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgIHZhciBtZSA9IHRoaXNcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBtZS5vcHRpb25zXG4gICAgICAgIHZhciB0cnVlTGVuZ3RoID0gb3B0aW9ucy50cnVlTGVuZ3RoXG4gICAgICAgIC8vIHN0ciA9IHN0ci5yZXBsYWNlKC9cXG4vZywgJycpXG5cbiAgICAgICAgaWYgKHRydWVMZW5ndGgpIHtcbiAgICAgICAgICBzdHIgPSBzdHIucmVwbGFjZSgvW1xcdTRlMDAtXFx1OWZhNV0vZywgJyoqJylcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdHIubGVuZ3RoXG4gICAgICB9LFxuICAgICAgX2NvdW50UmVzdWx0OiBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgIHZhciBtZSA9IHRoaXNcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBtZS5vcHRpb25zXG4gICAgICAgIHZhciBsZW4gPSBtZS5fY291bnQoc3RyKVxuICAgICAgICB2YXIgY291bnQgPSBvcHRpb25zLmNvdW50XG4gICAgICAgIHZhciBwcmUgPSBsZW5cbiAgICAgICAgaWYgKGxlbiA+IGNvdW50KSB7XG4gICAgICAgICAgICBwcmUgPSAnPGVtIGNsYXNzPVwidGV4dC1jb3VudC1lcnJvclwiPicgKyBsZW4gKyAnPC9lbT4nXG4gICAgICAgICAgICBtZS52YWxpZCA9IGZhbHNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZS52YWxpZCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJlICsgJy8nICsgY291bnRcbiAgICAgIH0sXG4gICAgICBpc1ZhbGlkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkXG4gICAgICB9LFxuICAgICAgZGVzdHJveTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtZSA9IHRoaXNcbiAgICAgICAgdmFyIGlucHV0ID0gJChtZS5vcHRpb25zLmlucHV0KVxuICAgICAgICBpbnB1dC5vZmYoJ2tleXVwJywgbWUuaGFuZGxlKVxuICAgICAgICBpbnB1dC5vZmYoJ3Bhc3RlJywgbWUuaGFuZGxlKVxuICAgICAgICBpbnB1dCA9IG51bGxcbiAgICAgIH1cbiAgICB9KVxuICB9XG4pIl19