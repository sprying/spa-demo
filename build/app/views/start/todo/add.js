define("app/views/start/todo/add",["magix","brix/loader","app/model/TodoModel","app/exts/globalTip/index"],function(t,e,n,a){return t.View.extend({tmpl:'<div class=todo-add> <ol class=breadcrumb> <li><a href="/start/todo/list.htm">\u6d88\u606f\u5217\u8868</a></li> <li class="active title"><a href="/start/todo/add.htm">\u65b0\u5efa\u6d88\u606f</a></li> </ol> <form class=form bx-name="app/exts/auth/index" bx-options="{autoRender:true}"> <div class=form-element> <label class=form-label>\u6d88\u606f\u6807\u9898</label> <input type=text name=title class="input w260" id=J_title placeholder="\u8bf7\u8f93\u5165\u6d88\u606f\u6807\u9898" required maxlength=20 /> <span class="text-count ml10" bx-name="app/exts/textcount/index" bx-options="{\n        input:\'#J_title\',\n        count:20\n      }"></span> </div> <div class=form-element> <label class=form-label>\u6d88\u606f\u5185\u5bb9</label> <textarea name=content class="textarea w260" id=J_content placeholder="\u8bf7\u8f93\u5165\u6d88\u606f\u5185\u5bb9" required maxlength=100 />\n      <span class="text-count vb ml10" bx-name="app/exts/textcount/index" bx-options="{\n        input:\'#J_content\',\n        count:100\n      }"></span>\n    </div>\n    {{^if(isSending)}}\n    <button class="btn btn-brand w120" mx-click="doSubmit">\u65b0\u5efa\u6d88\u606f</button>\n    {{/if}}\n    {{#if(isSending)}}\n    <button class="btn btn-brand w120 btn-disabled">\u8bf7\u6c42\u4e2d...</button>\n    {{/if}}\n  </form>\n</div>',render:function(){this.data={},this.setView()},doSubmit:function(t){var i=this,s=$("#"+this.id);t.preventDefault(),e.query("app/exts/auth/index",s)[0].auth.test().then(function(){var t=s.find(".form").serializeJSON();n.addItem(i,t).then(function(t,e){t||(i.navigate("/start/todo/list.htm"),a.show({content:"\u65b0\u589e\u6210\u529f",type:"ok"}))}),i.data.isSending=!0,i.setView()})}})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXJ0L3RvZG8vYWRkLmpzIl0sIm5hbWVzIjpbImRlZmluZSIsIk1hZ2l4IiwiTG9hZGVyIiwiVG9kb01vZGVsIiwiZ2xvYmFsVGlwIiwiVmlldyIsImV4dGVuZCIsInRtcGwiLCJyZW5kZXIiLCJ0aGlzIiwiZGF0YSIsInNldFZpZXciLCJkb1N1Ym1pdCIsImUiLCJtZSIsIiRlbCIsIiQiLCJpZCIsInByZXZlbnREZWZhdWx0IiwicXVlcnkiLCJhdXRoIiwidGVzdCIsInRoZW4iLCJmb3JtRGF0YSIsImZpbmQiLCJzZXJpYWxpemVKU09OIiwiYWRkSXRlbSIsImVyciIsIm5hdmlnYXRlIiwic2hvdyIsImNvbnRlbnQiLCJ0eXBlIiwiaXNTZW5kaW5nIl0sIm1hcHBpbmdzIjoiQUFHQUEsT0FBTyw0QkFDTCxRQUNBLGNBQ0Esc0JBQ0EsNEJBQ0MsU0FBVUMsRUFBT0MsRUFBUUMsRUFBV0MsR0FDcEMsTUFBT0gsR0FBTUksS0FBS0MsUUFBUUMsS0FBSyw0eUNBQXVwQ0MsT0FBUSxXQUMzckNDLEtBQUtDLFFBQ0xELEtBQUtFLFdBRVBDLFNBQVUsU0FBU0MsR0FDakIsR0FBSUMsR0FBS0wsS0FDTE0sRUFBTUMsRUFBRSxJQUFNUCxLQUFLUSxHQUN2QkosR0FBRUssaUJBQ1NoQixFQUFPaUIsTUFBTSxzQkFBdUJKLEdBQUssR0FBR0ssS0FDbERDLE9BQU9DLEtBQUssV0FDZixHQUFJQyxHQUFXUixFQUFJUyxLQUFLLFNBQVNDLGVBRWpDdEIsR0FBVXVCLFFBQVFaLEVBQUlTLEdBQVVELEtBQUssU0FBU0ssRUFBS2pCLEdBQzdDaUIsSUFDRmIsRUFBR2MsU0FBUyx3QkFDWnhCLEVBQVV5QixNQUNSQyxRQUFTLDJCQUNUQyxLQUFNLFVBSVpqQixFQUFHSixLQUFLc0IsV0FBWSxFQUNwQmxCLEVBQUdIIiwiZmlsZSI6InN0YXJ0L3RvZG8vYWRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHNwcnlpbmcuZmFuZ0BnbWFpbC5jb20gb24gMTcvNS85LlxuICovXG5kZWZpbmUoJ2FwcC92aWV3cy9zdGFydC90b2RvL2FkZCcsIFtcbiAgJ21hZ2l4JyxcbiAgJ2JyaXgvbG9hZGVyJyxcbiAgJ2FwcC9tb2RlbC9Ub2RvTW9kZWwnLFxuICAnYXBwL2V4dHMvZ2xvYmFsVGlwL2luZGV4J1xuXSwgZnVuY3Rpb24gKE1hZ2l4LCBMb2FkZXIsIFRvZG9Nb2RlbCwgZ2xvYmFsVGlwKSB7XG4gICByZXR1cm4gTWFnaXguVmlldy5leHRlbmQoe3RtcGw6XCI8ZGl2IGNsYXNzPXRvZG8tYWRkPiA8b2wgY2xhc3M9YnJlYWRjcnVtYj4gPGxpPjxhIGhyZWY9XFxcIi9zdGFydC90b2RvL2xpc3QuaHRtXFxcIj7mtojmga/liJfooag8L2E+PC9saT4gPGxpIGNsYXNzPVxcXCJhY3RpdmUgdGl0bGVcXFwiPjxhIGhyZWY9XFxcIi9zdGFydC90b2RvL2FkZC5odG1cXFwiPuaWsOW7uua2iOaBrzwvYT48L2xpPiA8L29sPiA8Zm9ybSBjbGFzcz1mb3JtIGJ4LW5hbWU9XFxcImFwcC9leHRzL2F1dGgvaW5kZXhcXFwiIGJ4LW9wdGlvbnM9XFxcInthdXRvUmVuZGVyOnRydWV9XFxcIj4gPGRpdiBjbGFzcz1mb3JtLWVsZW1lbnQ+IDxsYWJlbCBjbGFzcz1mb3JtLWxhYmVsPua2iOaBr+agh+mimDwvbGFiZWw+IDxpbnB1dCB0eXBlPXRleHQgbmFtZT10aXRsZSBjbGFzcz1cXFwiaW5wdXQgdzI2MFxcXCIgaWQ9Sl90aXRsZSBwbGFjZWhvbGRlcj1cXFwi6K+36L6T5YWl5raI5oGv5qCH6aKYXFxcIiByZXF1aXJlZCBtYXhsZW5ndGg9MjAgLz4gPHNwYW4gY2xhc3M9XFxcInRleHQtY291bnQgbWwxMFxcXCIgYngtbmFtZT1cXFwiYXBwL2V4dHMvdGV4dGNvdW50L2luZGV4XFxcIiBieC1vcHRpb25zPVxcXCJ7XFxuICAgICAgICBpbnB1dDonI0pfdGl0bGUnLFxcbiAgICAgICAgY291bnQ6MjBcXG4gICAgICB9XFxcIj48L3NwYW4+IDwvZGl2PiA8ZGl2IGNsYXNzPWZvcm0tZWxlbWVudD4gPGxhYmVsIGNsYXNzPWZvcm0tbGFiZWw+5raI5oGv5YaF5a65PC9sYWJlbD4gPHRleHRhcmVhIG5hbWU9Y29udGVudCBjbGFzcz1cXFwidGV4dGFyZWEgdzI2MFxcXCIgaWQ9Sl9jb250ZW50IHBsYWNlaG9sZGVyPVxcXCLor7fovpPlhaXmtojmga/lhoXlrrlcXFwiIHJlcXVpcmVkIG1heGxlbmd0aD0xMDAgLz5cXG4gICAgICA8c3BhbiBjbGFzcz1cXFwidGV4dC1jb3VudCB2YiBtbDEwXFxcIiBieC1uYW1lPVxcXCJhcHAvZXh0cy90ZXh0Y291bnQvaW5kZXhcXFwiIGJ4LW9wdGlvbnM9XFxcIntcXG4gICAgICAgIGlucHV0OicjSl9jb250ZW50JyxcXG4gICAgICAgIGNvdW50OjEwMFxcbiAgICAgIH1cXFwiPjwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuICAgIHt7XmlmKGlzU2VuZGluZyl9fVxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWJyYW5kIHcxMjBcXFwiIG14LWNsaWNrPVxcXCJkb1N1Ym1pdFxcXCI+5paw5bu65raI5oGvPC9idXR0b24+XFxuICAgIHt7L2lmfX1cXG4gICAge3sjaWYoaXNTZW5kaW5nKX19XFxuICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tYnJhbmQgdzEyMCBidG4tZGlzYWJsZWRcXFwiPuivt+axguS4rS4uLjwvYnV0dG9uPlxcbiAgICB7ey9pZn19XFxuICA8L2Zvcm0+XFxuPC9kaXY+XCIsICAgIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICAgIHRoaXMuZGF0YSA9IHt9XG4gICAgICB0aGlzLnNldFZpZXcoKVxuICAgIH0sXG4gICAgZG9TdWJtaXQ6IGZ1bmN0aW9uKGUpe1xuICAgICAgdmFyIG1lID0gdGhpc1xuICAgICAgdmFyICRlbCA9ICQoJyMnICsgdGhpcy5pZClcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgdmFyIGF1dGggPSBMb2FkZXIucXVlcnkoJ2FwcC9leHRzL2F1dGgvaW5kZXgnLCAkZWwpWzBdLmF1dGhcbiAgICAgIGF1dGgudGVzdCgpLnRoZW4oZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gJGVsLmZpbmQoJy5mb3JtJykuc2VyaWFsaXplSlNPTigpXG5cbiAgICAgICAgVG9kb01vZGVsLmFkZEl0ZW0obWUsIGZvcm1EYXRhKS50aGVuKGZ1bmN0aW9uKGVyciwgZGF0YSl7XG4gICAgICAgICAgaWYoIWVycil7XG4gICAgICAgICAgICBtZS5uYXZpZ2F0ZSgnL3N0YXJ0L3RvZG8vbGlzdC5odG0nKVxuICAgICAgICAgICAgZ2xvYmFsVGlwLnNob3coe1xuICAgICAgICAgICAgICBjb250ZW50OiAn5paw5aKe5oiQ5YqfJyxcbiAgICAgICAgICAgICAgdHlwZTogJ29rJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIG1lLmRhdGEuaXNTZW5kaW5nID0gdHJ1ZVxuICAgICAgICBtZS5zZXRWaWV3KClcbiAgICAgIH0pXG4gICAgfVxuICB9KVxufSlcbiJdfQ==