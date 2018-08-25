puts "Please enter number 1:\n"
num1 = gets.chomp.to_i
puts "And number 2:\n"
num2 = gets.chomp.to_i

# for n in 1..100
#     if (n % num1==0) && (n % num2==0) puts "FIZZBUZZ\n"
#     elsif (n % num1==0) puts "FiZz\n"
#     elsif (n % num2==0) puts "BuZz\n"
#     else puts "#{n}\n"
# end


for n in 1..100
    str = ""
    str+= "Fizz" if n % num1 == 0
    str+= "Buzz" if n % num2 == 0

    if str.empty?
        puts n
    else
        puts str
    end
end