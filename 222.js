var t = String.fromCharCode
              , e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$";
              compressToUint8Array=function(t) {
                    for (var e = r.compress(t), n = new Uint8Array(2 * e.length), i = 0, o = e.length; o > i; i++) {
                        var a = e.charCodeAt(i);
                        n[2 * i] = a >>> 8,
                        n[2 * i + 1] = a % 256
                    }
                    return n
                };