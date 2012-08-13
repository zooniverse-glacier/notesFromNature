  for (var
      WebReflection = {},
      DChambers = {},
      decoded = [],
      i = 0,
      encoded;
      i < 0xFFFF; ++i
  ) {
      decoded[i] = String.fromCharCode(i % 0xFF);
  }
  decoded = decoded.join("");
  
  ;(function (window) {
  
    var
      characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
      fromCharCode = String.fromCharCode,
      INVALID_CHARACTER_ERR = (function () {
        // fabricate a suitable error object
        try { document.createElement('$'); }
        catch (error) { return error; }}());
  
    // encoder
    window.btoa || (
    window.btoa = function (string) {
      var
        a, b, b1, b2, b3, b4, c, i = 0,
        len = string.length, max = Math.max, result = '';
  
      while (i < len) {
        a = string.charCodeAt(i++) || 0;
        b = string.charCodeAt(i++) || 0;
        c = string.charCodeAt(i++) || 0;
  
        if (max(a, b, c) > 0xFF) {
          throw INVALID_CHARACTER_ERR;
        }
  
        b1 = (a >> 2) & 0x3F;
        b2 = ((a & 0x3) << 4) | ((b >> 4) & 0xF);
        b3 = ((b & 0xF) << 2) | ((c >> 6) & 0x3);
        b4 = c & 0x3F;
  
        if (!b) {
          b3 = b4 = 64;
        } else if (!c) {
          b4 = 64;
        }
        result += characters.charAt(b1) + characters.charAt(b2) + characters.charAt(b3) + characters.charAt(b4);
      }
      return result;
    });
  
    // decoder
    window.atob || (
    window.atob = function (string) {
      string = string.replace(/=+$/, '');
      var
        a, b, b1, b2, b3, b4, c, i = 0,
        len = string.length, chars = [];
  
      if (len % 4 === 1) throw INVALID_CHARACTER_ERR;
  
      while (i < len) {
        b1 = characters.indexOf(string.charAt(i++));
        b2 = characters.indexOf(string.charAt(i++));
        b3 = characters.indexOf(string.charAt(i++));
        b4 = characters.indexOf(string.charAt(i++));
  
        a = ((b1 & 0x3F) << 2) | ((b2 >> 4) & 0x3);
        b = ((b2 & 0xF) << 4) | ((b3 >> 2) & 0xF);
        c = ((b3 & 0x3) << 6) | (b4 & 0x3F);
  
        chars.push(fromCharCode(a));
        b && chars.push(fromCharCode(b));
        c && chars.push(fromCharCode(c));
      }
      return chars.join('');
    });
  
  }(DChambers));
  
  !function (window) {
  
      // (C) WebReflection - Mit Style License
      // optimized version of the "official shim" by David Chambers
      // https://bitbucket.org/davidchambers/base64.js/src
  
      var
          fromCharCode = (function ($fromCharCode, MAX_LENGTH) {
              return function fromCharCode(code) {
                  for (var
                      result = [],
                      i = 0,
                      length = code.length;
                      i < length; i += MAX_LENGTH
                  ) {
                      result.push($fromCharCode.apply(null, code.slice(i, i + MAX_LENGTH)));
                  }
                  return result.join("");
              };
          }(String.fromCharCode, 0xFFFF)),
          characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".split(""),
          sretcarahc = {},
          INVALID_CHARACTER_ERR = new Error("Invalid Character"),
          max = Math.max,
          re = /=+$/,
          len = characters.length
      ;
  
      while (len--) sretcarahc[characters[len]] = len;
  
      window.atob || (window.atob = function atob(string) {
          if (string.length % 4) throw INVALID_CHARACTER_ERR;
          string = string.replace(re, "").split("");
          var
              a, b, b1, b2, b3, b4, c,
              i = 0, j = 0,
              result = []
          ;
          len = string.length;
          while (i < len) {
              b1 = sretcarahc[string[i++]];
              b2 = sretcarahc[string[i++]];
              b3 = sretcarahc[string[i++]];
              b4 = sretcarahc[string[i++]];
              a = ((b1 & 0x3F) << 2) | ((b2 >> 4) & 0x3);
              b = ((b2 & 0xF) << 4) | ((b3 >> 2) & 0xF);
              c = ((b3 & 0x3) << 6) | (b4 & 0x3F);
              result[j++] = a;
              b && (result[j++] = b);
              c && (result[j++] = c);
          }
          return fromCharCode(result);
      });
  
      window.btoa || (window.btoa = function btoa(string) {
          var
              a, b, b1, b2, b3, b4, c,
              i = 0,
              result = []
          ;
          len = string.length
          while (i < len) {
              a = string.charCodeAt(i++) || 0;
              b = string.charCodeAt(i++) || 0;
              c = string.charCodeAt(i++) || 0;
              if (0xFF < max(a, b, c)) throw INVALID_CHARACTER_ERR;
              b1 = (a >> 2) & 0x3F;
              b2 = ((a & 0x3) << 4) | ((b >> 4) & 0xF);
              b3 = ((b & 0xF) << 2) | ((c >> 6) & 0x3);
              b4 = c & 0x3F;
              b ? c ? 0 : b4 = 64 : b3 = b4 = 64;
              result.push(
                  characters[b1],
                  characters[b2],
                  characters[b3],
                  characters[b4]
              );
          }
          return result.join("");
      });
  
  }(WebReflection);
  
  encoded = (window.btoa || WebReflection.btoa)(decoded);
