module.exports = '\
<div class="popover popover-<%= type %> <%= elClass %>">\
  <div class="popover-title <%= title ? \'\' : \'hide\' %>"><%= title %></div>\
  <div class="popover-content"><%= content %></div>\
</div>\
'
