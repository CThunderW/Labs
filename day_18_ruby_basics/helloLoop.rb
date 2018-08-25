puts  "Please enter a number\n>"
num = gets.chomp.to_i

count = 0
while count < num do
    puts "Hello\n"
    count += 1
end


count = 0
while true
    break  if  count >= num
    puts "Hello\n"
    count += 1
end

loop  do
    break if count >= num
    puts "Hello\n"
    count += 1