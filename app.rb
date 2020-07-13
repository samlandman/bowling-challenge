require 'sinatra/base'

class BowlingGame < Sinatra::Base
  enable :sessions

  get '/' do
    erb :index
  end
end