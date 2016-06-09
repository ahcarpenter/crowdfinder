module Kaminari
  module HerCollection
    def self.included(base)
      base.class_eval do
        scope :page, ->(page) { where(page: page || 1) }
        scope :per,  ->(per_page) { where(per_page:  per_page || 50) }
      end
      base.extend(ClassMethods)
    end

    module ClassMethods
      def new_collection(parsed_data)
        collection = super(parsed_data)
        pagination = collection.metadata[:pagination]
        Kaminari.paginate_array(collection, total_count: pagination[:object_count])
          .page(pagination[:page_number])
          .per(pagination[:page_size])
      end
    end
  end
end