right_answers = 0
wrong_answers = 0
total_qs = 0

puts "How many sides does a hexagon have? \n 1- five \n 2- six \n 3- seven \n>Answer?: "
chosen = gets.chomp.to_i

if (chosen == 2)
puts "CORRECT!\n"
right_answers += 1 
else puts "RRRRR WRONG\n" 
    wrong_answers += 1
end
total_qs += 1
puts "What is the best soccer team in the world? \n 1- Arsenal FC\n 2- Barcelona\n 3- Vancouver Whitecaps\n>Answer?: "
chosen = gets.chomp.to_i
total_qs += 1
if (chosen == 1)
    puts "CORRECT!\n"
    right_answers += 1 
    else puts "RRRRR WRONG\n" 
        wrong_answers += 1
    end

puts "What's my age again?"
chosen = gets.chomp.to_i
total_qs += 1
if (chosen == 27)
    puts "CORRECT!\n"
    right_answers += 1 
    else puts "RRRRR WRONG\n" 
        wrong_answers += 1
    end
    percent = (right_answers.to_f/total_qs.to_f)

puts "YOU SCORED A #{percent}, with a #{right_answers} out of #{total_qs}"



