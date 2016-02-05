class Api::BooksController < Api::BaseController
  def index
    @books = Book.all
    render json: @books 
  end

  def show
    render json: book
  end

  def create
    @book = Book.create!(safe_params)
    render json: @book
  end

  def update
    book.update_attributes(safe_params)
    render nothing: true
  end

  def destroy
    book.destroy
    render nothing: true
  end

  private

  def book
    @book ||= Book.find(params[:id])    
  end

  def safe_params
    params.require(:book).permit(:title, :author)
  end

end
