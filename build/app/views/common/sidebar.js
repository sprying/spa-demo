define("app/views/common/sidebar",["magix","app/exts/menu/index"],function(i,e){return i.View.extend({tmpl:'<div class=sidebar> <ul> <li t-class:active=item.checked t-for="item in items"> <a href="{{item.path}}">{{item.name}}</a> </li> </ul> </div>',init:function(){this.observeLocation({path:!0})},render:function(){var i=e.getSideBarMenu(),t=$("#"+this.id),n=i.length;this.data={items:i},this.setView(function(){n||t.hide()},function(){n?t.show().animate({width:"200px"},250,"swing"):t.animate({width:"1px"},250,"swing",function(){t.hide()})})}})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9zaWRlYmFyLmpzIl0sIm5hbWVzIjpbImRlZmluZSIsIk1hZ2l4IiwiTWVudSIsIlZpZXciLCJleHRlbmQiLCJ0bXBsIiwiaW5pdCIsInRoaXMiLCJvYnNlcnZlTG9jYXRpb24iLCJwYXRoIiwicmVuZGVyIiwiaXRlbXMiLCJnZXRTaWRlQmFyTWVudSIsIiRlbCIsIiQiLCJpZCIsImlzU2hvdyIsImxlbmd0aCIsImRhdGEiLCJzZXRWaWV3IiwiaGlkZSIsInNob3ciLCJhbmltYXRlIiwid2lkdGgiXSwibWFwcGluZ3MiOiJBQUdBQSxPQUFPLDRCQUNMLFFBQ0EsdUJBQ0MsU0FBU0MsRUFBT0MsR0FDaEIsTUFBT0QsR0FBTUUsS0FBS0MsUUFBUUMsS0FBSywrSUFBdUpDLEtBQU0sV0FDekxDLEtBQUtDLGlCQUNIQyxNQUFNLEtBR1ZDLE9BQVEsV0FDTixHQUFJQyxHQUFRVCxFQUFLVSxpQkFDYkMsRUFBTUMsRUFBRSxJQUFNUCxLQUFLUSxJQUNuQkMsRUFBU0wsRUFBTU0sTUFDbkJWLE1BQUtXLE1BQ0hQLE1BQU9BLEdBRVRKLEtBQUtZLFFBQVEsV0FDUEgsR0FDRkgsRUFBSU8sUUFFTCxXQUNHSixFQU9GSCxFQUFJUSxPQUFPQyxTQUNUQyxNQUFTLFNBQ1IsSUFBSyxTQVJSVixFQUFJUyxTQUNGQyxNQUFTLE9BQ1IsSUFBSyxRQUFTLFdBQ2ZWLEVBQUlPIiwiZmlsZSI6ImNvbW1vbi9zaWRlYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHlpbmdjaHVuLmZ5Y0BhbGliYWJhLWluYy5jb20gb24gMjAxNy81LzYuXG4gKi9cbmRlZmluZSgnYXBwL3ZpZXdzL2NvbW1vbi9zaWRlYmFyJyxbXG4gICdtYWdpeCcsXG4gICdhcHAvZXh0cy9tZW51L2luZGV4J1xuXSwgZnVuY3Rpb24oTWFnaXgsIE1lbnUpe1xuICAgcmV0dXJuIE1hZ2l4LlZpZXcuZXh0ZW5kKHt0bXBsOlwiPGRpdiBjbGFzcz1zaWRlYmFyPiA8dWw+IDxsaSB0LWNsYXNzOmFjdGl2ZT1pdGVtLmNoZWNrZWQgdC1mb3I9XFxcIml0ZW0gaW4gaXRlbXNcXFwiPiA8YSBocmVmPVxcXCJ7e2l0ZW0ucGF0aH19XFxcIj57e2l0ZW0ubmFtZX19PC9hPiA8L2xpPiA8L3VsPiA8L2Rpdj5cIiwgICAgaW5pdDogZnVuY3Rpb24oKXtcbiAgICAgIHRoaXMub2JzZXJ2ZUxvY2F0aW9uKHtcbiAgICAgICAgcGF0aDogdHJ1ZVxuICAgICAgfSlcbiAgICB9LFxuICAgIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICAgIHZhciBpdGVtcyA9IE1lbnUuZ2V0U2lkZUJhck1lbnUoKVxuICAgICAgdmFyICRlbCA9ICQoJyMnICsgdGhpcy5pZClcbiAgICAgIHZhciBpc1Nob3cgPSBpdGVtcy5sZW5ndGhcbiAgICAgIHRoaXMuZGF0YSA9IHtcbiAgICAgICAgaXRlbXM6IGl0ZW1zXG4gICAgICB9XG4gICAgICB0aGlzLnNldFZpZXcoZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoIWlzU2hvdyl7XG4gICAgICAgICAgJGVsLmhpZGUoKVxuICAgICAgICB9XG4gICAgICB9LCBmdW5jdGlvbigpe1xuICAgICAgICBpZighaXNTaG93KXtcbiAgICAgICAgICAkZWwuYW5pbWF0ZSh7XG4gICAgICAgICAgICAnd2lkdGgnOiAnMXB4J1xuICAgICAgICAgIH0sIDI1MCwgJ3N3aW5nJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJGVsLmhpZGUoKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJGVsLnNob3coKS5hbmltYXRlKHtcbiAgICAgICAgICAgICd3aWR0aCc6ICcyMDBweCdcbiAgICAgICAgICB9LCAyNTAsICdzd2luZycpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9KVxufSkiXX0=