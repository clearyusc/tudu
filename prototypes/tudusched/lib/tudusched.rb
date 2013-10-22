require 'json'
require 'optparse'

require 'tudusched/scheduler'
require 'tudusched/manifest'

module Tudusched
  class << self
    def info
      return "this is just a test!"
    end

    def schedule manifest

    end

    def load_manifest_file filename
      h = JSON.parse(IO.read(filename))

      Manifest.new h
    end

    def cli
      options = {}

      OptionParser.new do |opts|
        opts.banner = "Usage: tudusched [options]"

        opts.on("-i", "--input MANIFEST",
          "The name of the input manifest json file") do |input|
          options[:input] = input
        end

        opts.on("-o", "--output OUT_MANIFEST",
          "the name of the file to write the output manifest to") do |output|
          options[:output] = output
        end
      end.parse!

      print "Using input file #{options[:input]}\n"
      print "Using output file #{options[:output]}\n"
    end
  end
end
