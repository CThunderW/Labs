# print "What is the year of your car?\n>"
# year = gets.chomp.to_i

# if year < 1999
#     puts "Your car is old enough to drink \n>"
# elsif year < 2010
#     puts "Your car is pretty old\n>"
# elsif year < 2018 
#     puts "Your car is pretty new\n>"
# elsif year > 2018
#     puts "Daaaang  how'd you get that?\n>"
# end


print "What is the year of your car?\n>"
year = gets.chomp.to_i

puts "Your car is old enough to drink\n>" unless (year > 2000)
puts "Your car is pretty old\n>" unless year > 2010 || year < 2000
puts "Your car is pretty new\n>" unless year > 2018 || year < 2010
puts "Daaaang how'd you get that?\n>" unless year < 2018

