timestamp = Time.new.strftime('%F-%T')
`rm ./build/nfn/build.js`
`cp ./public/nfn/build.js ./build/nfn/build-#{timestamp}.js`
index = File.read('./build/index.html')
index.gsub!('./nfn/build.js', "./nfn/build-#{timestamp}.js")
File.open('build/index.html', 'w'){ |f| f.puts index }
