buf1 = new Buffer('1234')
buf2 = new Buffer('0123')
buf3 = new Buffer('1234')
buf1.compare(buf2)
buf1.compare(buf3)
buf1.equals(buf2)
buf1.equals(buf3)
var arr = [buf1, buf2]
arr.sort(Buffer.compare)
