puts "Please enter a number of times to repeat:\n"
num = gets.chomp.to_i
count = 1
char = "a"
while count < num+1
    break  if  count >= num + 1
    puts (char) * (count)
    char.succ!
    count += 1
end

letter = "a"
count = 1
loop do
    break if count > 26
    for n in 1..count
        print letter.chomp
    end
print "\n"
letter.next!
count += 1