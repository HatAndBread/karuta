dictionary = [{word: nil, definition: nil}]
File.open('./word_list.txt', 'r').each_line do |line|
    dictionary << {word: nil, definition: nil} if dictionary.last[:word] && dictionary.last[:definition]
    unless dictionary.last[:word ]
        dictionary.last[:word] = line.strip
    else
        dictionary.last[:definition] = line.strip
    end
    
end

File.open('dictionary.rb', 'w') { |file| file.write(dictionary) }

p dictionary