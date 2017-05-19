define("app/serializejson",["jquery"],function(e){e.fn.serializeJSON=function(n){var r,t,a,i,s,u,l,o,p,c,d;return r=e.serializeJSON,t=this,a=r.setupOpts(n),i=t.serializeArray(),r.readCheckboxUncheckedValues(i,a,t),s={},e.each(i,function(e,n){u=n.name,l=n.value,o=r.extractTypeAndNameWithNoType(u),p=o.nameWithNoType,c=o.type,c||(c=r.tryToFindTypeFromDataAttr(u,t)),r.validateType(u,c,a),"skip"!==c&&(d=r.splitInputNameIntoKeysArray(p),l=r.parseValue(l,u,c,a),r.deepSet(s,d,l,a))}),s},e.serializeJSON={defaultOptions:{checkboxUncheckedValue:void 0,parseNumbers:!1,parseBooleans:!1,parseNulls:!1,parseAll:!1,parseWithFunction:null,customTypes:{},defaultTypes:{string:function(e){return String(e)},number:function(e){return Number(e)},boolean:function(e){return-1===["false","null","undefined","","0"].indexOf(e)},null:function(e){return-1===["false","null","undefined","","0"].indexOf(e)?e:null},array:function(e){return JSON.parse(e)},object:function(e){return JSON.parse(e)},auto:function(n){return e.serializeJSON.parseValue(n,null,null,{parseNumbers:!0,parseBooleans:!0,parseNulls:!0})},skip:null},useIntKeysAsArrayIndex:!1},setupOpts:function(n){var r,t,a,i,s,u;u=e.serializeJSON,null==n&&(n={}),a=u.defaultOptions||{},t=["checkboxUncheckedValue","parseNumbers","parseBooleans","parseNulls","parseAll","parseWithFunction","customTypes","defaultTypes","useIntKeysAsArrayIndex"];for(r in n)if(-1===t.indexOf(r))throw new Error("serializeJSON ERROR: invalid option '"+r+"'. Please use one of "+t.join(", "));return i=function(e){return!1!==n[e]&&""!==n[e]&&(n[e]||a[e])},s=i("parseAll"),{checkboxUncheckedValue:i("checkboxUncheckedValue"),parseNumbers:s||i("parseNumbers"),parseBooleans:s||i("parseBooleans"),parseNulls:s||i("parseNulls"),parseWithFunction:i("parseWithFunction"),typeFunctions:e.extend({},i("defaultTypes"),i("customTypes")),useIntKeysAsArrayIndex:i("useIntKeysAsArrayIndex")}},parseValue:function(n,r,t,a){var i,s;return i=e.serializeJSON,s=n,a.typeFunctions&&t&&a.typeFunctions[t]?s=a.typeFunctions[t](n):a.parseNumbers&&i.isNumeric(n)?s=Number(n):!a.parseBooleans||"true"!==n&&"false"!==n?a.parseNulls&&"null"==n&&(s=null):s="true"===n,a.parseWithFunction&&!t&&(s=a.parseWithFunction(s,r)),s},isObject:function(e){return e===Object(e)},isUndefined:function(e){return void 0===e},isValidArrayIndex:function(e){return/^[0-9]+$/.test(String(e))},isNumeric:function(e){return e-parseFloat(e)>=0},optionKeys:function(e){if(Object.keys)return Object.keys(e);var n,r=[];for(n in e)r.push(n);return r},readCheckboxUncheckedValues:function(n,r,t){var a,i,s,u,l;null==r&&(r={}),l=e.serializeJSON,a="input[type=checkbox][name]:not(:checked):not([disabled])",i=t.find(a).add(t.filter(a)),i.each(function(t,a){s=e(a),u=s.attr("data-unchecked-value"),u?n.push({name:a.name,value:u}):l.isUndefined(r.checkboxUncheckedValue)||n.push({name:a.name,value:r.checkboxUncheckedValue})})},extractTypeAndNameWithNoType:function(e){var n;return(n=e.match(/(.*):([^:]+)$/))?{nameWithNoType:n[1],type:n[2]}:{nameWithNoType:e,type:null}},tryToFindTypeFromDataAttr:function(e,n){var r,t,a;return r=e.replace(/(\[|\])/g,"\\$1"),t='[name="'+r+'"]',a=n.find(t).add(n.filter(t)),a.attr("data-value-type")||null},validateType:function(n,r,t){var a,i;if(i=e.serializeJSON,a=i.optionKeys(t?t.typeFunctions:i.defaultOptions.defaultTypes),r&&-1===a.indexOf(r))throw new Error("serializeJSON ERROR: Invalid type "+r+" found in input name '"+n+"', please use one of "+a.join(", "));return!0},splitInputNameIntoKeysArray:function(n){var r;return e.serializeJSON,r=n.split("["),r=e.map(r,function(e){return e.replace(/\]/g,"")}),""===r[0]&&r.shift(),r},deepSet:function(n,r,t,a){var i,s,u,l,o,p;if(null==a&&(a={}),p=e.serializeJSON,p.isUndefined(n))throw new Error("ArgumentError: param 'o' expected to be an object or array, found undefined");if(!r||0===r.length)throw new Error("ArgumentError: param 'keys' expected to be an array with least one element");i=r[0],1===r.length?""===i?n.push(t):n[i]=t:(s=r[1],""===i&&(l=n.length-1,o=n[l],i=p.isObject(o)&&(p.isUndefined(o[s])||r.length>2)?l:l+1),""===s?!p.isUndefined(n[i])&&e.isArray(n[i])||(n[i]=[]):a.useIntKeysAsArrayIndex&&p.isValidArrayIndex(s)?!p.isUndefined(n[i])&&e.isArray(n[i])||(n[i]=[]):!p.isUndefined(n[i])&&p.isObject(n[i])||(n[i]={}),u=r.slice(1),p.deepSet(n[i],u,t,a))}}});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcmlhbGl6ZWpzb24uanMiXSwibmFtZXMiOlsiZGVmaW5lIiwiJCIsImZuIiwic2VyaWFsaXplSlNPTiIsIm9wdGlvbnMiLCJmIiwiJGZvcm0iLCJvcHRzIiwiZm9ybUFzQXJyYXkiLCJzZXJpYWxpemVkT2JqZWN0IiwibmFtZSIsInZhbHVlIiwiX29iaiIsIm5hbWVXaXRoTm9UeXBlIiwidHlwZSIsImtleXMiLCJ0aGlzIiwic2V0dXBPcHRzIiwic2VyaWFsaXplQXJyYXkiLCJyZWFkQ2hlY2tib3hVbmNoZWNrZWRWYWx1ZXMiLCJlYWNoIiwiaSIsIm9iaiIsImV4dHJhY3RUeXBlQW5kTmFtZVdpdGhOb1R5cGUiLCJ0cnlUb0ZpbmRUeXBlRnJvbURhdGFBdHRyIiwidmFsaWRhdGVUeXBlIiwic3BsaXRJbnB1dE5hbWVJbnRvS2V5c0FycmF5IiwicGFyc2VWYWx1ZSIsImRlZXBTZXQiLCJkZWZhdWx0T3B0aW9ucyIsImNoZWNrYm94VW5jaGVja2VkVmFsdWUiLCJ1bmRlZmluZWQiLCJwYXJzZU51bWJlcnMiLCJwYXJzZUJvb2xlYW5zIiwicGFyc2VOdWxscyIsInBhcnNlQWxsIiwicGFyc2VXaXRoRnVuY3Rpb24iLCJjdXN0b21UeXBlcyIsImRlZmF1bHRUeXBlcyIsInN0cmluZyIsInN0ciIsIlN0cmluZyIsIm51bWJlciIsIk51bWJlciIsImJvb2xlYW4iLCJpbmRleE9mIiwibnVsbCIsImFycmF5IiwiSlNPTiIsInBhcnNlIiwib2JqZWN0IiwiYXV0byIsInNraXAiLCJ1c2VJbnRLZXlzQXNBcnJheUluZGV4Iiwib3B0IiwidmFsaWRPcHRzIiwib3B0V2l0aERlZmF1bHQiLCJFcnJvciIsImpvaW4iLCJrZXkiLCJ0eXBlRnVuY3Rpb25zIiwiZXh0ZW5kIiwidmFsU3RyIiwiaW5wdXROYW1lIiwicGFyc2VkVmFsIiwiaXNOdW1lcmljIiwiaXNPYmplY3QiLCJPYmplY3QiLCJpc1VuZGVmaW5lZCIsImlzVmFsaWRBcnJheUluZGV4IiwidmFsIiwidGVzdCIsInBhcnNlRmxvYXQiLCJvcHRpb25LZXlzIiwicHVzaCIsInNlbGVjdG9yIiwiJHVuY2hlY2tlZENoZWNrYm94ZXMiLCIkZWwiLCJkYXRhVW5jaGVja2VkVmFsdWUiLCJmaW5kIiwiYWRkIiwiZmlsdGVyIiwiZWwiLCJhdHRyIiwibWF0Y2giLCJlc2NhcGVkTmFtZSIsIiRpbnB1dCIsInJlcGxhY2UiLCJ2YWxpZFR5cGVzIiwic3BsaXQiLCJtYXAiLCJzaGlmdCIsIm8iLCJuZXh0S2V5IiwidGFpbCIsImxhc3RJZHgiLCJsYXN0VmFsIiwibGVuZ3RoIiwiaXNBcnJheSIsInNsaWNlIl0sIm1hcHBpbmdzIjoiQUFBQUEsT0FBTyxxQkFDTCxVQUNDLFNBQVVDLEdBQ1hBLEVBQUVDLEdBQUdDLGNBQWdCLFNBQVVDLEdBQzdCLEdBQUlDLEdBQUdDLEVBQU9DLEVBQU1DLEVBQWFDLEVBQWtCQyxFQUFNQyxFQUFPQyxFQUFNQyxFQUFnQkMsRUFBTUMsQ0EwQjVGLE9BekJBVixHQUFJSixFQUFFRSxjQUNORyxFQUFRVSxLQUNSVCxFQUFPRixFQUFFWSxVQUFVYixHQUduQkksRUFBY0YsRUFBTVksaUJBQ3BCYixFQUFFYyw0QkFBNEJYLEVBQWFELEVBQU1ELEdBR2pERyxLQUNBUixFQUFFbUIsS0FBS1osRUFBYSxTQUFVYSxFQUFHQyxHQUMvQlosRUFBUVksRUFBSVosS0FDWkMsRUFBUVcsRUFBSVgsTUFDWkMsRUFBT1AsRUFBRWtCLDZCQUE2QmIsR0FDdENHLEVBQWlCRCxFQUFLQyxlQUN0QkMsRUFBT0YsRUFBS0UsS0FDUEEsSUFBTUEsRUFBT1QsRUFBRW1CLDBCQUEwQmQsRUFBTUosSUFDcERELEVBQUVvQixhQUFhZixFQUFNSSxFQUFNUCxHQUVkLFNBQVRPLElBQ0ZDLEVBQU9WLEVBQUVxQiw0QkFBNEJiLEdBQ3JDRixFQUFRTixFQUFFc0IsV0FBV2hCLEVBQU9ELEVBQU1JLEVBQU1QLEdBQ3hDRixFQUFFdUIsUUFBUW5CLEVBQWtCTSxFQUFNSixFQUFPSixNQUd0Q0UsR0FLVFIsRUFBRUUsZUFFQTBC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RWpDLEtBQVUxRCxFQUFFaUcsUUFBUU4sRUFBRWpDLE1BQ3hDaUMsRUFBRWpDLFFBR0F0RCxFQUFFK0QsWUFBWXdCLEVBQUVqQyxLQUFVdEQsRUFBRTZELFNBQVMwQixFQUFFakMsTUFDekNpQyxFQUFFakMsT0FNUm1DLEVBQU8vRSxFQUFLb0YsTUFBTSxHQUNsQjlGLEVBQUV1QixRQUFRZ0UsRUFBRWpDLEdBQU1tQyxFQUFNbkYsRUFBT0oiLCJmaWxlIjoic2VyaWFsaXplanNvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImRlZmluZSgnYXBwL3NlcmlhbGl6ZWpzb24nLCBbXG4gICdqcXVlcnknXG5dLCBmdW5jdGlvbiAoJCkge1xuICAkLmZuLnNlcmlhbGl6ZUpTT04gPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIHZhciBmLCAkZm9ybSwgb3B0cywgZm9ybUFzQXJyYXksIHNlcmlhbGl6ZWRPYmplY3QsIG5hbWUsIHZhbHVlLCBfb2JqLCBuYW1lV2l0aE5vVHlwZSwgdHlwZSwga2V5cztcbiAgICBmID0gJC5zZXJpYWxpemVKU09OO1xuICAgICRmb3JtID0gdGhpczsgLy8gTk9URTogdGhlIHNldCBvZiBtYXRjaGVkIGVsZW1lbnRzIGlzIG1vc3QgbGlrZWx5IGEgZm9ybSwgYnV0IGl0IGNvdWxkIGFsc28gYmUgYSBncm91cCBvZiBpbnB1dHNcbiAgICBvcHRzID0gZi5zZXR1cE9wdHMob3B0aW9ucyk7IC8vIGNhbGN1bGF0ZSB2YWx1ZXMgZm9yIG9wdGlvbnMge3BhcnNlTnVtYmVycywgcGFyc2VCb29sZW5zLCBwYXJzZU51bGxzLCAuLi59IHdpdGggZGVmYXVsdHNcblxuICAgIC8vIFVzZSBuYXRpdmUgYHNlcmlhbGl6ZUFycmF5YCBmdW5jdGlvbiB0byBnZXQgYW4gYXJyYXkgb2Yge25hbWUsIHZhbHVlfSBvYmplY3RzLlxuICAgIGZvcm1Bc0FycmF5ID0gJGZvcm0uc2VyaWFsaXplQXJyYXkoKTtcbiAgICBmLnJlYWRDaGVja2JveFVuY2hlY2tlZFZhbHVlcyhmb3JtQXNBcnJheSwgb3B0cywgJGZvcm0pOyAvLyBhZGQgb2JqZWN0cyB0byB0aGUgYXJyYXkgZnJvbSB1bmNoZWNrZWQgY2hlY2tib3hlcyBpZiBuZWVkZWRcblxuICAgIC8vIENvbnZlcnQgdGhlIGZvcm1Bc0FycmF5IGludG8gYSBzZXJpYWxpemVkT2JqZWN0IHdpdGggbmVzdGVkIGtleXNcbiAgICBzZXJpYWxpemVkT2JqZWN0ID0ge307XG4gICAgJC5lYWNoKGZvcm1Bc0FycmF5LCBmdW5jdGlvbiAoaSwgb2JqKSB7XG4gICAgICBuYW1lICA9IG9iai5uYW1lOyAvLyBvcmlnaW5hbCBpbnB1dCBuYW1lXG4gICAgICB2YWx1ZSA9IG9iai52YWx1ZTsgLy8gaW5wdXQgdmFsdWVcbiAgICAgIF9vYmogPSBmLmV4dHJhY3RUeXBlQW5kTmFtZVdpdGhOb1R5cGUobmFtZSk7XG4gICAgICBuYW1lV2l0aE5vVHlwZSA9IF9vYmoubmFtZVdpdGhOb1R5cGU7IC8vIGlucHV0IG5hbWUgd2l0aCBubyB0eXBlIChpLmUuIFwiZm9vOnN0cmluZ1wiID0+IFwiZm9vXCIpXG4gICAgICB0eXBlID0gX29iai50eXBlOyAvLyB0eXBlIGRlZmluZWQgZnJvbSB0aGUgaW5wdXQgbmFtZSBpbiA6dHlwZSBjb2xvbiBub3RhdGlvblxuICAgICAgaWYgKCF0eXBlKSB0eXBlID0gZi50cnlUb0ZpbmRUeXBlRnJvbURhdGFBdHRyKG5hbWUsICRmb3JtKTsgLy8gdHlwZSBkZWZpbmVkIGluIHRoZSBkYXRhLXZhbHVlLXR5cGUgYXR0clxuICAgICAgZi52YWxpZGF0ZVR5cGUobmFtZSwgdHlwZSwgb3B0cyk7IC8vIG1ha2Ugc3VyZSB0aGF0IHRoZSB0eXBlIGlzIG9uZSBvZiB0aGUgdmFsaWQgdHlwZXMgaWYgZGVmaW5lZFxuXG4gICAgICBpZiAodHlwZSAhPT0gJ3NraXAnKSB7IC8vIGlnbm9yZSBlbGVtZW50cyB3aXRoIHR5cGUgJ3NraXAnXG4gICAgICAgIGtleXMgPSBmLnNwbGl0SW5wdXROYW1lSW50b0tleXNBcnJheShuYW1lV2l0aE5vVHlwZSk7XG4gICAgICAgIHZhbHVlID0gZi5wYXJzZVZhbHVlKHZhbHVlLCBuYW1lLCB0eXBlLCBvcHRzKTsgLy8gY29udmVydCB0byBzdHJpbmcsIG51bWJlciwgYm9vbGVhbiwgbnVsbCBvciBjdXN0b21UeXBlXG4gICAgICAgIGYuZGVlcFNldChzZXJpYWxpemVkT2JqZWN0LCBrZXlzLCB2YWx1ZSwgb3B0cyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHNlcmlhbGl6ZWRPYmplY3Q7XG4gIH07XG5cbiAgLy8gVXNlICQuc2VyaWFsaXplSlNPTiBhcyBuYW1lc3BhY2UgZm9yIHRoZSBhdXhpbGlhciBmdW5jdGlvbnNcbiAgLy8gYW5kIHRvIGRlZmluZSBkZWZhdWx0c1xuICAkLnNlcmlhbGl6ZUpTT04gPSB7XG5cbiAgICBkZWZhdWx0T3B0aW9uczoge1xuICAgICAgY2hlY2tib3hVbmNoZWNrZWRWYWx1ZTogdW5kZWZpbmVkLCAvLyB0byBpbmNsdWRlIHRoYXQgdmFsdWUgZm9yIHVuY2hlY2tlZCBjaGVja2JveGVzIChpbnN0ZWFkIG9mIGlnbm9yaW5nIHRoZW0pXG5cbiAgICAgIHBhcnNlTnVtYmVyczogZmFsc2UsIC8vIGNvbnZlcnQgdmFsdWVzIGxpa2UgXCIxXCIsIFwiLTIuMzNcIiB0byAxLCAtMi4zM1xuICAgICAgcGFyc2VCb29sZWFuczogZmFsc2UsIC8vIGNvbnZlcnQgXCJ0cnVlXCIsIFwiZmFsc2VcIiB0byB0cnVlLCBmYWxzZVxuICAgICAgcGFyc2VOdWxsczogZmFsc2UsIC8vIGNvbnZlcnQgXCJudWxsXCIgdG8gbnVsbFxuICAgICAgcGFyc2VBbGw6IGZhbHNlLCAvLyBhbGwgb2YgdGhlIGFib3ZlXG4gICAgICBwYXJzZVdpdGhGdW5jdGlvbjogbnVsbCwgLy8gdG8gdXNlIGN1c3RvbSBwYXJzZXIsIGEgZnVuY3Rpb24gbGlrZTogZnVuY3Rpb24odmFsKXsgcmV0dXJuIHBhcnNlZF92YWw7IH1cblxuICAgICAgY3VzdG9tVHlwZXM6IHt9LCAvLyBvdmVycmlkZSBkZWZhdWx0VHlwZXNcbiAgICAgIGRlZmF1bHRUeXBlczoge1xuICAgICAgICBcInN0cmluZ1wiOiAgZnVuY3Rpb24oc3RyKSB7IHJldHVybiBTdHJpbmcoc3RyKTsgfSxcbiAgICAgICAgXCJudW1iZXJcIjogIGZ1bmN0aW9uKHN0cikgeyByZXR1cm4gTnVtYmVyKHN0cik7IH0sXG4gICAgICAgIFwiYm9vbGVhblwiOiBmdW5jdGlvbihzdHIpIHsgdmFyIGZhbHNlcyA9IFtcImZhbHNlXCIsIFwibnVsbFwiLCBcInVuZGVmaW5lZFwiLCBcIlwiLCBcIjBcIl07IHJldHVybiBmYWxzZXMuaW5kZXhPZihzdHIpID09PSAtMTsgfSxcbiAgICAgICAgXCJudWxsXCI6ICAgIGZ1bmN0aW9uKHN0cikgeyB2YXIgZmFsc2VzID0gW1wiZmFsc2VcIiwgXCJudWxsXCIsIFwidW5kZWZpbmVkXCIsIFwiXCIsIFwiMFwiXTsgcmV0dXJuIGZhbHNlcy5pbmRleE9mKHN0cikgPT09IC0xID8gc3RyIDogbnVsbDsgfSxcbiAgICAgICAgXCJhcnJheVwiOiAgIGZ1bmN0aW9uKHN0cikgeyByZXR1cm4gSlNPTi5wYXJzZShzdHIpOyB9LFxuICAgICAgICBcIm9iamVjdFwiOiAgZnVuY3Rpb24oc3RyKSB7IHJldHVybiBKU09OLnBhcnNlKHN0cik7IH0sXG4gICAgICAgIFwiYXV0b1wiOiAgICBmdW5jdGlvbihzdHIpIHsgcmV0dXJuICQuc2VyaWFsaXplSlNPTi5wYXJzZVZhbHVlKHN0ciwgbnVsbCwgbnVsbCwge3BhcnNlTnVtYmVyczogdHJ1ZSwgcGFyc2VCb29sZWFuczogdHJ1ZSwgcGFyc2VOdWxsczogdHJ1ZX0pOyB9LCAvLyB0cnkgYWdhaW4gd2l0aCBzb21ldGhpbmcgbGlrZSBcInBhcnNlQWxsXCJcbiAgICAgICAgXCJza2lwXCI6ICAgIG51bGwgLy8gc2tpcCBpcyBhIHNwZWNpYWwgdHlwZSB0aGF0IG1ha2VzIGl0IGVhc3kgdG8gaWdub3JlIGVsZW1lbnRzXG4gICAgICB9LFxuXG4gICAgICB1c2VJbnRLZXlzQXNBcnJheUluZGV4OiBmYWxzZSAvLyBuYW1lPVwiZm9vWzJdXCIgdmFsdWU9XCJ2XCIgPT4ge2ZvbzogW251bGwsIG51bGwsIFwidlwiXX0sIGluc3RlYWQgb2Yge2ZvbzogW1wiMlwiOiBcInZcIl19XG4gICAgfSxcblxuICAgIC8vIE1lcmdlIG9wdGlvbiBkZWZhdWx0cyBpbnRvIHRoZSBvcHRpb25zXG4gICAgc2V0dXBPcHRzOiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICB2YXIgb3B0LCB2YWxpZE9wdHMsIGRlZmF1bHRPcHRpb25zLCBvcHRXaXRoRGVmYXVsdCwgcGFyc2VBbGwsIGY7XG4gICAgICBmID0gJC5zZXJpYWxpemVKU09OO1xuXG4gICAgICBpZiAob3B0aW9ucyA9PSBudWxsKSB7IG9wdGlvbnMgPSB7fTsgfSAgIC8vIG9wdGlvbnMgfHw9IHt9XG4gICAgICBkZWZhdWx0T3B0aW9ucyA9IGYuZGVmYXVsdE9wdGlvbnMgfHwge307IC8vIGRlZmF1bHRPcHRpb25zXG5cbiAgICAgIC8vIE1ha2Ugc3VyZSB0aGF0IHRoZSB1c2VyIGRpZG4ndCBtaXNzcGVsbCBhbiBvcHRpb25cbiAgICAgIHZhbGlkT3B0cyA9IFsnY2hlY2tib3hVbmNoZWNrZWRWYWx1ZScsICdwYXJzZU51bWJlcnMnLCAncGFyc2VCb29sZWFucycsICdwYXJzZU51bGxzJywgJ3BhcnNlQWxsJywgJ3BhcnNlV2l0aEZ1bmN0aW9uJywgJ2N1c3RvbVR5cGVzJywgJ2RlZmF1bHRUeXBlcycsICd1c2VJbnRLZXlzQXNBcnJheUluZGV4J107IC8vIHJlLWRlZmluZSBiZWNhdXNlIHRoZSB1c2VyIG1heSBvdmVycmlkZSB0aGUgZGVmYXVsdE9wdGlvbnNcbiAgICAgIGZvciAob3B0IGluIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHZhbGlkT3B0cy5pbmRleE9mKG9wdCkgPT09IC0xKSB7XG4gICAgICAgICAgdGhyb3cgbmV3ICBFcnJvcihcInNlcmlhbGl6ZUpTT04gRVJST1I6IGludmFsaWQgb3B0aW9uICdcIiArIG9wdCArIFwiJy4gUGxlYXNlIHVzZSBvbmUgb2YgXCIgKyB2YWxpZE9wdHMuam9pbignLCAnKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSGVscGVyIHRvIGdldCB0aGUgZGVmYXVsdCB2YWx1ZSBmb3IgdGhpcyBvcHRpb24gaWYgbm9uZSBpcyBzcGVjaWZpZWQgYnkgdGhlIHVzZXJcbiAgICAgIG9wdFdpdGhEZWZhdWx0ID0gZnVuY3Rpb24oa2V5KSB7IHJldHVybiAob3B0aW9uc1trZXldICE9PSBmYWxzZSkgJiYgKG9wdGlvbnNba2V5XSAhPT0gJycpICYmIChvcHRpb25zW2tleV0gfHwgZGVmYXVsdE9wdGlvbnNba2V5XSk7IH07XG5cbiAgICAgIC8vIFJldHVybiBjb21wdXRlZCBvcHRpb25zIChvcHRzIHRvIGJlIHVzZWQgaW4gdGhlIHJlc3Qgb2YgdGhlIHNjcmlwdClcbiAgICAgIHBhcnNlQWxsID0gb3B0V2l0aERlZmF1bHQoJ3BhcnNlQWxsJyk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjaGVja2JveFVuY2hlY2tlZFZhbHVlOiAgICBvcHRXaXRoRGVmYXVsdCgnY2hlY2tib3hVbmNoZWNrZWRWYWx1ZScpLFxuXG4gICAgICAgIHBhcnNlTnVtYmVyczogIHBhcnNlQWxsIHx8IG9wdFdpdGhEZWZhdWx0KCdwYXJzZU51bWJlcnMnKSxcbiAgICAgICAgcGFyc2VCb29sZWFuczogcGFyc2VBbGwgfHwgb3B0V2l0aERlZmF1bHQoJ3BhcnNlQm9vbGVhbnMnKSxcbiAgICAgICAgcGFyc2VOdWxsczogICAgcGFyc2VBbGwgfHwgb3B0V2l0aERlZmF1bHQoJ3BhcnNlTnVsbHMnKSxcbiAgICAgICAgcGFyc2VXaXRoRnVuY3Rpb246ICAgICAgICAgb3B0V2l0aERlZmF1bHQoJ3BhcnNlV2l0aEZ1bmN0aW9uJyksXG5cbiAgICAgICAgdHlwZUZ1bmN0aW9uczogJC5leHRlbmQoe30sIG9wdFdpdGhEZWZhdWx0KCdkZWZhdWx0VHlwZXMnKSwgb3B0V2l0aERlZmF1bHQoJ2N1c3RvbVR5cGVzJykpLFxuXG4gICAgICAgIHVzZUludEtleXNBc0FycmF5SW5kZXg6IG9wdFdpdGhEZWZhdWx0KCd1c2VJbnRLZXlzQXNBcnJheUluZGV4JylcbiAgICAgIH07XG4gICAgfSxcblxuICAgIC8vIEdpdmVuIGEgc3RyaW5nLCBhcHBseSB0aGUgdHlwZSBvciB0aGUgcmVsZXZhbnQgXCJwYXJzZVwiIG9wdGlvbnMsIHRvIHJldHVybiB0aGUgcGFyc2VkIHZhbHVlXG4gICAgcGFyc2VWYWx1ZTogZnVuY3Rpb24odmFsU3RyLCBpbnB1dE5hbWUsIHR5cGUsIG9wdHMpIHtcbiAgICAgIHZhciBmLCBwYXJzZWRWYWw7XG4gICAgICBmID0gJC5zZXJpYWxpemVKU09OO1xuICAgICAgcGFyc2VkVmFsID0gdmFsU3RyOyAvLyBpZiBubyBwYXJzaW5nIGlzIG5lZWRlZCwgdGhlIHJldHVybmVkIHZhbHVlIHdpbGwgYmUgdGhlIHNhbWVcblxuICAgICAgaWYgKG9wdHMudHlwZUZ1bmN0aW9ucyAmJiB0eXBlICYmIG9wdHMudHlwZUZ1bmN0aW9uc1t0eXBlXSkgeyAvLyB1c2UgYSB0eXBlIGlmIGF2YWlsYWJsZVxuICAgICAgICBwYXJzZWRWYWwgPSBvcHRzLnR5cGVGdW5jdGlvbnNbdHlwZV0odmFsU3RyKTtcbiAgICAgIH0gZWxzZSBpZiAob3B0cy5wYXJzZU51bWJlcnMgICYmIGYuaXNOdW1lcmljKHZhbFN0cikpIHsgLy8gYXV0bzogbnVtYmVyXG4gICAgICAgIHBhcnNlZFZhbCA9IE51bWJlcih2YWxTdHIpO1xuICAgICAgfSBlbHNlIGlmIChvcHRzLnBhcnNlQm9vbGVhbnMgJiYgKHZhbFN0ciA9PT0gXCJ0cnVlXCIgfHwgdmFsU3RyID09PSBcImZhbHNlXCIpKSB7IC8vIGF1dG86IGJvb2xlYW5cbiAgICAgICAgcGFyc2VkVmFsID0gKHZhbFN0ciA9PT0gXCJ0cnVlXCIpO1xuICAgICAgfSBlbHNlIGlmIChvcHRzLnBhcnNlTnVsbHMgICAgJiYgdmFsU3RyID09IFwibnVsbFwiKSB7IC8vIGF1dG86IG51bGxcbiAgICAgICAgcGFyc2VkVmFsID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRzLnBhcnNlV2l0aEZ1bmN0aW9uICYmICF0eXBlKSB7IC8vIGN1c3RvbSBwYXJzZSBmdW5jdGlvbiAoYXBwbHkgYWZ0ZXIgcHJldmlvdXMgcGFyc2luZyBvcHRpb25zLCBidXQgbm90IGlmIHRoZXJlJ3MgYSBzcGVjaWZpYyB0eXBlKVxuICAgICAgICBwYXJzZWRWYWwgPSBvcHRzLnBhcnNlV2l0aEZ1bmN0aW9uKHBhcnNlZFZhbCwgaW5wdXROYW1lKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhcnNlZFZhbDtcbiAgICB9LFxuXG4gICAgaXNPYmplY3Q6ICAgICAgICAgIGZ1bmN0aW9uKG9iaikgeyByZXR1cm4gb2JqID09PSBPYmplY3Qob2JqKTsgfSwgLy8gaXMgaXQgYW4gT2JqZWN0P1xuICAgIGlzVW5kZWZpbmVkOiAgICAgICBmdW5jdGlvbihvYmopIHsgcmV0dXJuIG9iaiA9PT0gdm9pZCAwOyB9LCAvLyBzYWZlIGNoZWNrIGZvciB1bmRlZmluZWQgdmFsdWVzXG4gICAgaXNWYWxpZEFycmF5SW5kZXg6IGZ1bmN0aW9uKHZhbCkgeyByZXR1cm4gL15bMC05XSskLy50ZXN0KFN0cmluZyh2YWwpKTsgfSwgLy8gMSwyLDMsNCAuLi4gYXJlIHZhbGlkIGFycmF5IGluZGV4ZXNcbiAgICBpc051bWVyaWM6ICAgICAgICAgZnVuY3Rpb24ob2JqKSB7IHJldHVybiBvYmogLSBwYXJzZUZsb2F0KG9iaikgPj0gMDsgfSwgLy8gdGFrZW4gZnJvbSBqUXVlcnkuaXNOdW1lcmljIGltcGxlbWVudGF0aW9uLiBOb3QgdXNpbmcgalF1ZXJ5LmlzTnVtZXJpYyB0byBzdXBwb3J0IG9sZCBqUXVlcnkgYW5kIFplcHRvIHZlcnNpb25zXG5cbiAgICBvcHRpb25LZXlzOiBmdW5jdGlvbihvYmopIHsgaWYgKE9iamVjdC5rZXlzKSB7IHJldHVybiBPYmplY3Qua2V5cyhvYmopOyB9IGVsc2UgeyB2YXIga2V5LCBrZXlzID0gW107IGZvcihrZXkgaW4gb2JqKXsga2V5cy5wdXNoKGtleSk7IH0gcmV0dXJuIGtleXM7fSB9LCAvLyBwb2x5ZmlsbCBPYmplY3Qua2V5cyB0byBnZXQgb3B0aW9uIGtleXMgaW4gSUU8OVxuXG5cbiAgICAvLyBGaWxsIHRoZSBmb3JtQXNBcnJheSBvYmplY3Qgd2l0aCB2YWx1ZXMgZm9yIHRoZSB1bmNoZWNrZWQgY2hlY2tib3ggaW5wdXRzLFxuICAgIC8vIHVzaW5nIHRoZSBzYW1lIGZvcm1hdCBhcyB0aGUganF1ZXJ5LnNlcmlhbGl6ZUFycmF5IGZ1bmN0aW9uLlxuICAgIC8vIFRoZSB2YWx1ZSBvZiB0aGUgdW5jaGVja2VkIHZhbHVlcyBpcyBkZXRlcm1pbmVkIGZyb20gdGhlIG9wdHMuY2hlY2tib3hVbmNoZWNrZWRWYWx1ZVxuICAgIC8vIGFuZC9vciB0aGUgZGF0YS11bmNoZWNrZWQtdmFsdWUgYXR0cmlidXRlIG9mIHRoZSBpbnB1dHMuXG4gICAgcmVhZENoZWNrYm94VW5jaGVja2VkVmFsdWVzOiBmdW5jdGlvbiAoZm9ybUFzQXJyYXksIG9wdHMsICRmb3JtKSB7XG4gICAgICB2YXIgc2VsZWN0b3IsICR1bmNoZWNrZWRDaGVja2JveGVzLCAkZWwsIGRhdGFVbmNoZWNrZWRWYWx1ZSwgZjtcbiAgICAgIGlmIChvcHRzID09IG51bGwpIHsgb3B0cyA9IHt9OyB9XG4gICAgICBmID0gJC5zZXJpYWxpemVKU09OO1xuXG4gICAgICBzZWxlY3RvciA9ICdpbnB1dFt0eXBlPWNoZWNrYm94XVtuYW1lXTpub3QoOmNoZWNrZWQpOm5vdChbZGlzYWJsZWRdKSc7XG4gICAgICAkdW5jaGVja2VkQ2hlY2tib3hlcyA9ICRmb3JtLmZpbmQoc2VsZWN0b3IpLmFkZCgkZm9ybS5maWx0ZXIoc2VsZWN0b3IpKTtcbiAgICAgICR1bmNoZWNrZWRDaGVja2JveGVzLmVhY2goZnVuY3Rpb24gKGksIGVsKSB7XG4gICAgICAgICRlbCA9ICQoZWwpO1xuICAgICAgICBkYXRhVW5jaGVja2VkVmFsdWUgPSAkZWwuYXR0cignZGF0YS11bmNoZWNrZWQtdmFsdWUnKTtcbiAgICAgICAgaWYoZGF0YVVuY2hlY2tlZFZhbHVlKSB7IC8vIGRhdGEtdW5jaGVja2VkLXZhbHVlIGhhcyBwcmVjZWRlbmNlIG92ZXIgb3B0aW9uIG9wdHMuY2hlY2tib3hVbmNoZWNrZWRWYWx1ZVxuICAgICAgICAgIGZvcm1Bc0FycmF5LnB1c2goe25hbWU6IGVsLm5hbWUsIHZhbHVlOiBkYXRhVW5jaGVja2VkVmFsdWV9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoIWYuaXNVbmRlZmluZWQob3B0cy5jaGVja2JveFVuY2hlY2tlZFZhbHVlKSkge1xuICAgICAgICAgICAgZm9ybUFzQXJyYXkucHVzaCh7bmFtZTogZWwubmFtZSwgdmFsdWU6IG9wdHMuY2hlY2tib3hVbmNoZWNrZWRWYWx1ZX0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8vIFJldHVybnMgYW5kIG9iamVjdCB3aXRoIHByb3BlcnRpZXMge25hbWVfd2l0aG91dF90eXBlLCB0eXBlfSBmcm9tIGEgZ2l2ZW4gbmFtZS5cbiAgICAvLyBUaGUgdHlwZSBpcyBudWxsIGlmIG5vbmUgc3BlY2lmaWVkLiBFeGFtcGxlOlxuICAgIC8vICAgXCJmb29cIiAgICAgICAgICAgPT4gIHtuYW1lV2l0aE5vVHlwZTogXCJmb29cIiwgICAgICB0eXBlOiAgbnVsbH1cbiAgICAvLyAgIFwiZm9vOmJvb2xlYW5cIiAgID0+ICB7bmFtZVdpdGhOb1R5cGU6IFwiZm9vXCIsICAgICAgdHlwZTogXCJib29sZWFuXCJ9XG4gICAgLy8gICBcImZvb1tiYXJdOm51bGxcIiA9PiAge25hbWVXaXRoTm9UeXBlOiBcImZvb1tiYXJdXCIsIHR5cGU6IFwibnVsbFwifVxuICAgIGV4dHJhY3RUeXBlQW5kTmFtZVdpdGhOb1R5cGU6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIHZhciBtYXRjaDtcbiAgICAgIGlmIChtYXRjaCA9IG5hbWUubWF0Y2goLyguKik6KFteOl0rKSQvKSkge1xuICAgICAgICByZXR1cm4ge25hbWVXaXRoTm9UeXBlOiBtYXRjaFsxXSwgdHlwZTogbWF0Y2hbMl19O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHtuYW1lV2l0aE5vVHlwZTogbmFtZSwgdHlwZTogbnVsbH07XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIEZpbmQgYW4gaW5wdXQgaW4gdGhlICRmb3JtIHdpdGggdGhlIHNhbWUgbmFtZSxcbiAgICAvLyBhbmQgZ2V0IHRoZSBkYXRhLXZhbHVlLXR5cGUgYXR0cmlidXRlLlxuICAgIC8vIFJldHVybnMgbmlsIGlmIG5vbmUgZm91bmQuIFJldHVybnMgdGhlIGZpcnN0IGRhdGEtdmFsdWUtdHlwZSBmb3VuZCBpZiBtYW55IGlucHV0cyBoYXZlIHRoZSBzYW1lIG5hbWUuXG4gICAgdHJ5VG9GaW5kVHlwZUZyb21EYXRhQXR0cjogZnVuY3Rpb24obmFtZSwgJGZvcm0pIHtcbiAgICAgIHZhciBlc2NhcGVkTmFtZSwgc2VsZWN0b3IsICRpbnB1dCwgdHlwZUZyb21EYXRhQXR0cjtcbiAgICAgIGVzY2FwZWROYW1lID0gbmFtZS5yZXBsYWNlKC8oXFxbfFxcXSkvZywgXCJcXFxcJDFcIik7IC8vIGVzY2FwZSB0aGUgW10gaW4gdGhlIG5hbWUgdG8gYmUgdXNlZCBhcyBzZWxlY3RvclxuICAgICAgc2VsZWN0b3IgPSAnW25hbWU9XCInICsgZXNjYXBlZE5hbWUgKyAnXCJdJztcbiAgICAgICRpbnB1dCA9ICRmb3JtLmZpbmQoc2VsZWN0b3IpLmFkZCgkZm9ybS5maWx0ZXIoc2VsZWN0b3IpKTtcbiAgICAgIHR5cGVGcm9tRGF0YUF0dHIgPSAkaW5wdXQuYXR0cignZGF0YS12YWx1ZS10eXBlJyk7IC8vIE5PVEU6IHRoaXMgcmV0dXJucyBvbmx5IHRoZSBmaXJzdCAkaW5wdXQgZWxlbWVudCBpZiBtdWx0aXBsZSBhcmUgbWF0Y2hlZCB3aXRoIHRoZSBzYW1lIG5hbWUgKGkuZS4gYW4gXCJhcnJheVtdXCIpLiBTbywgYXJyYXlzIHdpdGggZGlmZmVyZW50IGVsZW1lbnQgdHlwZXMgc3BlY2lmaWVkIHRocm91Z2ggdGhlIGRhdGEtdmFsdWUtdHlwZSBhdHRyIGlzIG5vdCBzdXBwb3J0ZWQuXG4gICAgICByZXR1cm4gdHlwZUZyb21EYXRhQXR0ciB8fCBudWxsO1xuICAgIH0sXG5cbiAgICAvLyBSYWlzZSBhbiBlcnJvciBpZiB0aGUgdHlwZSBpcyBub3QgcmVjb2duaXplZC5cbiAgICB2YWxpZGF0ZVR5cGU6IGZ1bmN0aW9uKG5hbWUsIHR5cGUsIG9wdHMpIHtcbiAgICAgIHZhciB2YWxpZFR5cGVzLCBmO1xuICAgICAgZiA9ICQuc2VyaWFsaXplSlNPTjtcbiAgICAgIHZhbGlkVHlwZXMgPSBmLm9wdGlvbktleXMob3B0cyA/IG9wdHMudHlwZUZ1bmN0aW9ucyA6IGYuZGVmYXVsdE9wdGlvbnMuZGVmYXVsdFR5cGVzKTtcbiAgICAgIGlmICghdHlwZSB8fCB2YWxpZFR5cGVzLmluZGV4T2YodHlwZSkgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwic2VyaWFsaXplSlNPTiBFUlJPUjogSW52YWxpZCB0eXBlIFwiICsgdHlwZSArIFwiIGZvdW5kIGluIGlucHV0IG5hbWUgJ1wiICsgbmFtZSArIFwiJywgcGxlYXNlIHVzZSBvbmUgb2YgXCIgKyB2YWxpZFR5cGVzLmpvaW4oJywgJykpO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8vIFNwbGl0IHRoZSBpbnB1dCBuYW1lIGluIHByb2dyYW1hdGljYWxseSByZWFkYWJsZSBrZXlzLlxuICAgIC8vIEV4YW1wbGVzOlxuICAgIC8vIFwiZm9vXCIgICAgICAgICAgICAgID0+IFsnZm9vJ11cbiAgICAvLyBcIltmb29dXCIgICAgICAgICAgICA9PiBbJ2ZvbyddXG4gICAgLy8gXCJmb29baW5uXVtiYXJdXCIgICAgPT4gWydmb28nLCAnaW5uJywgJ2JhciddXG4gICAgLy8gXCJmb29baW5uW2Jhcl1dXCIgICAgPT4gWydmb28nLCAnaW5uJywgJ2JhciddXG4gICAgLy8gXCJmb29baW5uXVthcnJdWzBdXCIgPT4gWydmb28nLCAnaW5uJywgJ2FycicsICcwJ11cbiAgICAvLyBcImFycltdW3ZhbF1cIiAgICAgICA9PiBbJ2FycicsICcnLCAndmFsJ11cbiAgICBzcGxpdElucHV0TmFtZUludG9LZXlzQXJyYXk6IGZ1bmN0aW9uKG5hbWVXaXRoTm9UeXBlKSB7XG4gICAgICB2YXIga2V5cywgZjtcbiAgICAgIGYgPSAkLnNlcmlhbGl6ZUpTT047XG4gICAgICBrZXlzID0gbmFtZVdpdGhOb1R5cGUuc3BsaXQoJ1snKTsgLy8gc3BsaXQgc3RyaW5nIGludG8gYXJyYXlcbiAgICAgIGtleXMgPSAkLm1hcChrZXlzLCBmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkucmVwbGFjZSgvXFxdL2csICcnKTsgfSk7IC8vIHJlbW92ZSBjbG9zaW5nIGJyYWNrZXRzXG4gICAgICBpZiAoa2V5c1swXSA9PT0gJycpIHsga2V5cy5zaGlmdCgpOyB9IC8vIGVuc3VyZSBubyBvcGVuaW5nIGJyYWNrZXQgKFwiW2Zvb11baW5uXVwiIHNob3VsZCBiZSBzYW1lIGFzIFwiZm9vW2lubl1cIilcbiAgICAgIHJldHVybiBrZXlzO1xuICAgIH0sXG5cbiAgICAvLyBTZXQgYSB2YWx1ZSBpbiBhbiBvYmplY3Qgb3IgYXJyYXksIHVzaW5nIG11bHRpcGxlIGtleXMgdG8gc2V0IGluIGEgbmVzdGVkIG9iamVjdCBvciBhcnJheTpcbiAgICAvL1xuICAgIC8vIGRlZXBTZXQob2JqLCBbJ2ZvbyddLCB2KSAgICAgICAgICAgICAgIC8vIG9ialsnZm9vJ10gPSB2XG4gICAgLy8gZGVlcFNldChvYmosIFsnZm9vJywgJ2lubiddLCB2KSAgICAgICAgLy8gb2JqWydmb28nXVsnaW5uJ10gPSB2IC8vIENyZWF0ZSB0aGUgaW5uZXIgb2JqWydmb28nXSBvYmplY3QsIGlmIG5lZWRlZFxuICAgIC8vIGRlZXBTZXQob2JqLCBbJ2ZvbycsICdpbm4nLCAnMTIzJ10sIHYpIC8vIG9ialsnZm9vJ11bJ2FyciddWycxMjMnXSA9IHYgLy9cbiAgICAvL1xuICAgIC8vIGRlZXBTZXQob2JqLCBbJzAnXSwgdikgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9ialsnMCddID0gdlxuICAgIC8vIGRlZXBTZXQoYXJyLCBbJzAnXSwgdiwge3VzZUludEtleXNBc0FycmF5SW5kZXg6IHRydWV9KSAgIC8vIGFyclswXSA9IHZcbiAgICAvLyBkZWVwU2V0KGFyciwgWycnXSwgdikgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhcnIucHVzaCh2KVxuICAgIC8vIGRlZXBTZXQob2JqLCBbJ2FycicsICcnXSwgdikgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9ialsnYXJyJ10ucHVzaCh2KVxuICAgIC8vXG4gICAgLy8gYXJyID0gW107XG4gICAgLy8gZGVlcFNldChhcnIsIFsnJywgdl0gICAgICAgICAgLy8gYXJyID0+IFt2XVxuICAgIC8vIGRlZXBTZXQoYXJyLCBbJycsICdmb28nXSwgdikgIC8vIGFyciA9PiBbdiwge2Zvbzogdn1dXG4gICAgLy8gZGVlcFNldChhcnIsIFsnJywgJ2JhciddLCB2KSAgLy8gYXJyID0+IFt2LCB7Zm9vOiB2LCBiYXI6IHZ9XVxuICAgIC8vIGRlZXBTZXQoYXJyLCBbJycsICdiYXInXSwgdikgIC8vIGFyciA9PiBbdiwge2ZvbzogdiwgYmFyOiB2fSwge2Jhcjogdn1dXG4gICAgLy9cbiAgICBkZWVwU2V0OiBmdW5jdGlvbiAobywga2V5cywgdmFsdWUsIG9wdHMpIHtcbiAgICAgIHZhciBrZXksIG5leHRLZXksIHRhaWwsIGxhc3RJZHgsIGxhc3RWYWwsIGY7XG4gICAgICBpZiAob3B0cyA9PSBudWxsKSB7IG9wdHMgPSB7fTsgfVxuICAgICAgZiA9ICQuc2VyaWFsaXplSlNPTjtcbiAgICAgIGlmIChmLmlzVW5kZWZpbmVkKG8pKSB7IHRocm93IG5ldyBFcnJvcihcIkFyZ3VtZW50RXJyb3I6IHBhcmFtICdvJyBleHBlY3RlZCB0byBiZSBhbiBvYmplY3Qgb3IgYXJyYXksIGZvdW5kIHVuZGVmaW5lZFwiKTsgfVxuICAgICAgaWYgKCFrZXlzIHx8IGtleXMubGVuZ3RoID09PSAwKSB7IHRocm93IG5ldyBFcnJvcihcIkFyZ3VtZW50RXJyb3I6IHBhcmFtICdrZXlzJyBleHBlY3RlZCB0byBiZSBhbiBhcnJheSB3aXRoIGxlYXN0IG9uZSBlbGVtZW50XCIpOyB9XG5cbiAgICAgIGtleSA9IGtleXNbMF07XG5cbiAgICAgIC8vIE9ubHkgb25lIGtleSwgdGhlbiBpdCdzIG5vdCBhIGRlZXBTZXQsIGp1c3QgYXNzaWduIHRoZSB2YWx1ZS5cbiAgICAgIGlmIChrZXlzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBpZiAoa2V5ID09PSAnJykge1xuICAgICAgICAgIG8ucHVzaCh2YWx1ZSk7IC8vICcnIGlzIHVzZWQgdG8gcHVzaCB2YWx1ZXMgaW50byB0aGUgYXJyYXkgKGFzc3VtZSBvIGlzIGFuIGFycmF5KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9ba2V5XSA9IHZhbHVlOyAvLyBvdGhlciBrZXlzIGNhbiBiZSB1c2VkIGFzIG9iamVjdCBrZXlzIG9yIGFycmF5IGluZGV4ZXNcbiAgICAgICAgfVxuXG4gICAgICAvLyBXaXRoIG1vcmUga2V5cyBpcyBhIGRlZXBTZXQuIEFwcGx5IHJlY3Vyc2l2ZWx5LlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV4dEtleSA9IGtleXNbMV07XG5cbiAgICAgICAgLy8gJycgaXMgdXNlZCB0byBwdXNoIHZhbHVlcyBpbnRvIHRoZSBhcnJheSxcbiAgICAgICAgLy8gd2l0aCBuZXh0S2V5LCBzZXQgdGhlIHZhbHVlIGludG8gdGhlIHNhbWUgb2JqZWN0LCBpbiBvYmplY3RbbmV4dEtleV0uXG4gICAgICAgIC8vIENvdmVycyB0aGUgY2FzZSBvZiBbJycsICdmb28nXSBhbmQgWycnLCAndmFyJ10gdG8gcHVzaCB0aGUgb2JqZWN0IHtmb28sIHZhcn0sIGFuZCB0aGUgY2FzZSBvZiBuZXN0ZWQgYXJyYXlzLlxuICAgICAgICBpZiAoa2V5ID09PSAnJykge1xuICAgICAgICAgIGxhc3RJZHggPSBvLmxlbmd0aCAtIDE7IC8vIGFzdW1lIG8gaXMgYXJyYXlcbiAgICAgICAgICBsYXN0VmFsID0gb1tsYXN0SWR4XTtcbiAgICAgICAgICBpZiAoZi5pc09iamVjdChsYXN0VmFsKSAmJiAoZi5pc1VuZGVmaW5lZChsYXN0VmFsW25leHRLZXldKSB8fCBrZXlzLmxlbmd0aCA+IDIpKSB7IC8vIGlmIG5leHRLZXkgaXMgbm90IHByZXNlbnQgaW4gdGhlIGxhc3Qgb2JqZWN0IGVsZW1lbnQsIG9yIHRoZXJlIGFyZSBtb3JlIGtleXMgdG8gZGVlcCBzZXRcbiAgICAgICAgICAgIGtleSA9IGxhc3RJZHg7IC8vIHRoZW4gc2V0IHRoZSBuZXcgdmFsdWUgaW4gdGhlIHNhbWUgb2JqZWN0IGVsZW1lbnRcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAga2V5ID0gbGFzdElkeCArIDE7IC8vIG90aGVyd2lzZSwgcG9pbnQgdG8gc2V0IHRoZSBuZXh0IGluZGV4IGluIHRoZSBhcnJheVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vICcnIGlzIHVzZWQgdG8gcHVzaCB2YWx1ZXMgaW50byB0aGUgYXJyYXkgXCJhcnJheVtdXCJcbiAgICAgICAgaWYgKG5leHRLZXkgPT09ICcnKSB7XG4gICAgICAgICAgaWYgKGYuaXNVbmRlZmluZWQob1trZXldKSB8fCAhJC5pc0FycmF5KG9ba2V5XSkpIHtcbiAgICAgICAgICAgIG9ba2V5XSA9IFtdOyAvLyBkZWZpbmUgKG9yIG92ZXJyaWRlKSBhcyBhcnJheSB0byBwdXNoIHZhbHVlc1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAob3B0cy51c2VJbnRLZXlzQXNBcnJheUluZGV4ICYmIGYuaXNWYWxpZEFycmF5SW5kZXgobmV4dEtleSkpIHsgLy8gaWYgMSwgMiwgMyAuLi4gdGhlbiB1c2UgYW4gYXJyYXksIHdoZXJlIG5leHRLZXkgaXMgdGhlIGluZGV4XG4gICAgICAgICAgICBpZiAoZi5pc1VuZGVmaW5lZChvW2tleV0pIHx8ICEkLmlzQXJyYXkob1trZXldKSkge1xuICAgICAgICAgICAgICBvW2tleV0gPSBbXTsgLy8gZGVmaW5lIChvciBvdmVycmlkZSkgYXMgYXJyYXksIHRvIGluc2VydCB2YWx1ZXMgdXNpbmcgaW50IGtleXMgYXMgYXJyYXkgaW5kZXhlc1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7IC8vIGZvciBhbnl0aGluZyBlbHNlLCB1c2UgYW4gb2JqZWN0LCB3aGVyZSBuZXh0S2V5IGlzIGdvaW5nIHRvIGJlIHRoZSBhdHRyaWJ1dGUgbmFtZVxuICAgICAgICAgICAgaWYgKGYuaXNVbmRlZmluZWQob1trZXldKSB8fCAhZi5pc09iamVjdChvW2tleV0pKSB7XG4gICAgICAgICAgICAgIG9ba2V5XSA9IHt9OyAvLyBkZWZpbmUgKG9yIG92ZXJyaWRlKSBhcyBvYmplY3QsIHRvIHNldCBuZXN0ZWQgcHJvcGVydGllc1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlY3Vyc2l2ZWx5IHNldCB0aGUgaW5uZXIgb2JqZWN0XG4gICAgICAgIHRhaWwgPSBrZXlzLnNsaWNlKDEpO1xuICAgICAgICBmLmRlZXBTZXQob1trZXldLCB0YWlsLCB2YWx1ZSwgb3B0cyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59KSJdfQ==
