# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def partlet array, letter
    array.select do |value|
        if value.include?(letter)
            p value
        end
    end
end

partlet(beverages_array, letter_o)
partlet(beverages_array, letter_t)

# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

def add(num1, num2, num3)
  num1 + num2 + num3
end
def add2(num4, num5, num6, num7)
  num4 + num5 + num6 + num7
end
p add 42, 7, 27
p add2 25, 17, 47, 11

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike
  def initialize
    @model = "Trek"
    @wheels = 2
    @current_speed = 0
  end

    def bike_info
        if @current_speed > 0
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
        else @current_speed < 0
            "The #{@model} bike has #{@wheels} wheels and is going 0 mph."
        end
    end
    def pedal_faster(num)
        @current_speed += num
    end
    def brake(num)
        @current_speed -= num
    end
end

my_bike = Bike.new
p my_bike.bike_info
my_bike.pedal_faster(10)
p my_bike.bike_info
my_bike.pedal_faster(18)
p my_bike.bike_info
my_bike.brake(5)
p my_bike.bike_info
my_bike.brake(25)
p my_bike.bike_info

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
