define("app/views/common/layout",["magix","app/exts/menu/index"],function(i,e){return i.View.extend({tmpl:'<div mx-vframe=true mx-view="app/views/common/header"></div> <div mx-vframe=true mx-view="app/views/common/sidebar"></div> <div mx-vframe=true id=magix_vf_main class=main> <div bx-name="components/spin"></div> </div>',init:function(){this.observeLocation({path:!0})},render:function(){var i=this,n=e.getSideBarMenu(),a=n.length;if(i.rendered){var t=$("#magix_vf_main");a?t.animate({marginLeft:"250px"},250,"swing"):t.delay(150).animate({marginLeft:"30px"},250,"swing",function(){t.css("margin-left","")}),i._mountVframes()}else i.setView(function(){var e=$("#magix_vf_main");a?e.css({marginLeft:"250px"}):e.css({marginLeft:""}),i._mountVframes()})},_mountVframes:function(){var i=this.vom.get("magix_vf_main"),e=this.location.path.substring(1).replace(/\.htm$/,"")||"start/todo/list";i.mountView("app/views/"+e)}})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9sYXlvdXQuanMiXSwibmFtZXMiOlsiZGVmaW5lIiwiTWFnaXgiLCJNZW51IiwiVmlldyIsImV4dGVuZCIsInRtcGwiLCJpbml0IiwidGhpcyIsIm9ic2VydmVMb2NhdGlvbiIsInBhdGgiLCJyZW5kZXIiLCJtZSIsIml0ZW1zIiwiZ2V0U2lkZUJhck1lbnUiLCJpc1Nob3ciLCJsZW5ndGgiLCJyZW5kZXJlZCIsIiRtYWluIiwiJCIsImFuaW1hdGUiLCJtYXJnaW5MZWZ0IiwiZGVsYXkiLCJjc3MiLCJfbW91bnRWZnJhbWVzIiwic2V0VmlldyIsIm1haW5WZnJhbWUiLCJ2b20iLCJnZXQiLCJsb2NhdGlvbiIsInN1YnN0cmluZyIsInJlcGxhY2UiLCJtb3VudFZpZXciXSwibWFwcGluZ3MiOiJBQUdBQSxPQUFPLDJCQUNMLFFBQ0EsdUJBQ0MsU0FBVUMsRUFBT0MsR0FDakIsTUFBT0QsR0FBTUUsS0FBS0MsUUFBUUMsS0FBSywyTkFBcU9DLEtBQU0sV0FDdlFDLEtBQUtDLGlCQUNIQyxNQUFNLEtBR1ZDLE9BQVEsV0FDTixHQUFJQyxHQUFLSixLQUNMSyxFQUFRVixFQUFLVyxpQkFDYkMsRUFBU0YsRUFBTUcsTUFFbkIsSUFBS0osRUFBR0ssU0FjRCxDQUNMLEdBQUlDLEdBQVFDLEVBQUUsaUJBQ1ZKLEdBQ0ZHLEVBQU1FLFNBQ0pDLFdBQWMsU0FDYixJQUFLLFNBRVJILEVBQU1JLE1BQU0sS0FBS0YsU0FDZkMsV0FBYyxRQUNiLElBQUssUUFBUyxXQUNmSCxFQUFNSyxJQUFJLGNBQWUsTUFHN0JYLEVBQUdZLG9CQTFCSFosR0FBR2EsUUFBUSxXQUNULEdBQUlQLEdBQVFDLEVBQUUsaUJBQ1ZKLEdBQ0ZHLEVBQU1LLEtBQ0pGLFdBQWMsVUFHaEJILEVBQU1LLEtBQ0pGLFdBQWMsS0FHbEJULEVBQUdZLG1CQWtCVEEsY0FBZSxXQUNiLEdBQUlFLEdBQWFsQixLQUFLbUIsSUFBSUMsSUFBSSxpQkFDMUJsQixFQUFPRixLQUFLcUIsU0FBU25CLEtBQUtvQixVQUFVLEdBQUdDLFFBQVEsU0FBVSxLQUFPLGlCQUNwRUwsR0FBV00sVUFBVSxhQUFldEIiLCJmaWxlIjoiY29tbW9uL2xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSB5aW5nY2h1bi5meWNAYWxpYmFiYS1pbmMuY29tIG9uIDIwMTcvNC8yNS5cbiAqL1xuZGVmaW5lKCdhcHAvdmlld3MvY29tbW9uL2xheW91dCcsIFtcbiAgJ21hZ2l4JyxcbiAgJ2FwcC9leHRzL21lbnUvaW5kZXgnXG5dLCBmdW5jdGlvbiAoTWFnaXgsIE1lbnUpIHtcbiAgIHJldHVybiBNYWdpeC5WaWV3LmV4dGVuZCh7dG1wbDpcIjxkaXYgbXgtdmZyYW1lPXRydWUgbXgtdmlldz1cXFwiYXBwL3ZpZXdzL2NvbW1vbi9oZWFkZXJcXFwiPjwvZGl2PiA8ZGl2IG14LXZmcmFtZT10cnVlIG14LXZpZXc9XFxcImFwcC92aWV3cy9jb21tb24vc2lkZWJhclxcXCI+PC9kaXY+IDxkaXYgbXgtdmZyYW1lPXRydWUgaWQ9bWFnaXhfdmZfbWFpbiBjbGFzcz1tYWluPiA8ZGl2IGJ4LW5hbWU9XFxcImNvbXBvbmVudHMvc3BpblxcXCI+PC9kaXY+IDwvZGl2PlwiLCAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLm9ic2VydmVMb2NhdGlvbih7XG4gICAgICAgIHBhdGg6IHRydWVcbiAgICAgIH0pXG4gICAgfSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBtZSA9IHRoaXNcbiAgICAgIHZhciBpdGVtcyA9IE1lbnUuZ2V0U2lkZUJhck1lbnUoKVxuICAgICAgdmFyIGlzU2hvdyA9IGl0ZW1zLmxlbmd0aFxuXG4gICAgICBpZiAoIW1lLnJlbmRlcmVkKSB7XG4gICAgICAgIG1lLnNldFZpZXcoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciAkbWFpbiA9ICQoJyNtYWdpeF92Zl9tYWluJylcbiAgICAgICAgICBpZiAoaXNTaG93KSB7XG4gICAgICAgICAgICAkbWFpbi5jc3Moe1xuICAgICAgICAgICAgICAnbWFyZ2luTGVmdCc6ICcyNTBweCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRtYWluLmNzcyh7XG4gICAgICAgICAgICAgICdtYXJnaW5MZWZ0JzogJydcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIG1lLl9tb3VudFZmcmFtZXMoKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyICRtYWluID0gJCgnI21hZ2l4X3ZmX21haW4nKVxuICAgICAgICBpZiAoaXNTaG93KSB7XG4gICAgICAgICAgJG1haW4uYW5pbWF0ZSh7XG4gICAgICAgICAgICAnbWFyZ2luTGVmdCc6ICcyNTBweCdcbiAgICAgICAgICB9LCAyNTAsICdzd2luZycpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJG1haW4uZGVsYXkoMTUwKS5hbmltYXRlKHtcbiAgICAgICAgICAgICdtYXJnaW5MZWZ0JzogJzMwcHgnXG4gICAgICAgICAgfSwgMjUwLCAnc3dpbmcnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkbWFpbi5jc3MoJ21hcmdpbi1sZWZ0JywgJycpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBtZS5fbW91bnRWZnJhbWVzKClcbiAgICAgIH1cbiAgICB9LFxuICAgIF9tb3VudFZmcmFtZXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBtYWluVmZyYW1lID0gdGhpcy52b20uZ2V0KCdtYWdpeF92Zl9tYWluJylcbiAgICAgIHZhciBwYXRoID0gdGhpcy5sb2NhdGlvbi5wYXRoLnN1YnN0cmluZygxKS5yZXBsYWNlKC9cXC5odG0kLywgJycpIHx8ICdzdGFydC90b2RvL2xpc3QnXG4gICAgICBtYWluVmZyYW1lLm1vdW50VmlldygnYXBwL3ZpZXdzLycgKyBwYXRoKVxuICAgIH1cbiAgfSlcbn0pXG4iXX0=