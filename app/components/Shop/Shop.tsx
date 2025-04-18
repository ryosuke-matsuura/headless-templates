import { products } from '@wix/stores';
import testIds from '@app/utils/test-ids';
import { WixMediaImage } from '@app/components/Image/WixMediaImage';
import IndexSectionFeaturesWhitePattern11 from '../../../src/components/features-white-pattern/IndexSectionFeaturesWhitePattern11';

export function Shop({ items }: { items: products.Product[] }) {
  return (
    <div className="mx-auto" style={{ fontFamily: 'Noto Serif JP' }}>
      <IndexSectionFeaturesWhitePattern11 />
      <h2
        className="text-center pt-20"
        style={{ fontFamily: '"Noto Serif JP", serif' }}
      >
        Line up
      </h2>
      <div
        className="text-custom-1 text-center py-8 sm:py-8 h-[150px] sm:h-[150px]"
        data-testid={testIds.SHOP_PAGE.HEADER}
      />
      {items.length ? (
        <div
          className="w-4/5 overflow-hidden mx-auto text-center mt-[-200px] sm:mt-[-130px] px-10"
          data-testid={testIds.PRODUCT_LIST.CONTAINER}
        >
          <ul
            className="grid sm:grid-cols-5 gap-8 grid-flow-row"
            style={{ fontFamily: 'Noto Serif JP, serif' }}
          >
            {items.map((item) => (
              <li
                key={item._id}
                className="relative"
                data-testid={testIds.PRODUCT_ITEM.CONTAINER}
              >
                <a
                  href={`/product-page/${item.slug}`}
                  data-testid={testIds.PRODUCT_ITEM.PRODUCT_DETAILS_CTA}
                >
                  <div className="h-auto max-w-full">
                    <WixMediaImage
                      media={item.media?.mainMedia?.image?.url}
                      height={280}
                      width={280}
                      alt={
                        item.media?.mainMedia?.image?.altText || 'main image'
                      }
                    />
                  </div>
                  {!item.manageVariants && item.stock?.inStock ? (
                    <a
                      data-testid={testIds.PRODUCT_ITEM.BUY_NOW_CTA}
                      className="btn-main absolute -mt-10 left-0 cursor-pointer bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
                      href={`/api/quick-buy/${item._id}?quantity=1`}
                    >
                      今すぐ購入する
                    </a>
                  ) : (
                    <button
                      className="btn-main absolute -mt-10 left-0 cursor-pointer bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
                      disabled
                    >
                      Out of Stock
                    </button>
                  )}
                  <div className="p-2 text-left">
                    <span>{item.name}</span>
                    <br />
                    <span className="text-xs">
                      {item.price!.formatted!.price}
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="text-3xl w-full text-center p-9 box-borderbox-border max-w-4xl mx-auto">
          No products found. Click{' '}
          <a
            href="https://manage.wix.com/account/site-selector?actionUrl=+https%3A%2F%2Fmanage.wix.com%2Fdashboard%2F%7BmetaSiteId%7D%2Fstore%2Fproducts%3FreferralInfo%3DHeadless"
            target="_blank"
            rel="noreferrer"
            className="text-purple-500"
          >
            here
          </a>{' '}
          to go to the business dashboard to add products. Once added, they will
          appear here.
        </div>
      )}
    </div>
  );
}
