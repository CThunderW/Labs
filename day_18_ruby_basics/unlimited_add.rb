sum = 0

loop do
    puts "Please enter any amount of numbers, and type exit to see their sum\n"
    entry = gets.chomp
    break if entry == "exit"
    sum += entry.to_i
    puts "#{sum}"
end
puts `Your total was  #{sum}`