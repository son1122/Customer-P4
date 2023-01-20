import React from 'react';
export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children: 'https://fact-link.com/home/dhipaya/logo.png',
  },
  Menu: {
    className: 'header0-menu',
    children: [
      {
        name: 'item0',
        className: 'header0-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <span>
                  <p>Car Insurance</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
        subItem: [
          {
            name: 'sub0',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'image0',
                  className: 'item-image',
                  children:
                    'https://www.tipinsure.com/new_design_5/assets/img/motor-plan-1.svg',
                },
                {
                  name: 'title',
                  className: 'item-title',
                  children: 'TIP First Class Premium',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: 'Best Insurance for Your CAR',
                },
              ],
            },
          },
          {
            name: 'sub1',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'image0',
                  className: 'item-image',
                  children:
                    'https://www.tipinsure.com/new_design_5/assets/img/motor-plan-2p.svg',
                },
                {
                  name: 'title',
                  className: 'item-title',
                  children: 'TIP 2 Plus',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: 'Best Insurance for Protection',
                },
              ],
            },
          },
          {
            name: 'sub3',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'image0',
                  className: 'item-image',
                  children:
                      'https://www.tipinsure.com/new_design_5/assets/img/motor-plan-3.svg',
                },
                {
                  name: 'title',
                  className: 'item-title',
                  children: 'TIP Third Class',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: 'Best Insurance for Value',
                },
              ],
            },
          },
        ],
      },
      {
        name: 'item1',
        className: 'header0-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <span>
                  <p>Login</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const Banner30DataSource = {
  wrapper: { className: 'banner3 ld3xozzhwb-editor_css' },
  textWrapper: {
    className: 'banner3-text-wrapper',
    children: [
      {
        name: 'nameEn',
        className: 'banner3-name-en',
        children: (
          <span>
            <span>
              <p>
                No. 1 Non-life Insurance&nbsp;<span>All your needs</span>
              </p>
            </span>
          </span>
        ),
      },
      {
        name: 'slogan',
        className: 'banner3-slogan',
        children: 'TIP Insurance',
        texty: true,
      },
      {
        name: 'name',
        className: 'banner3-name',
        children: (
          <span>
            <span>
              <p>
                Buy Insurance&nbsp;<span>
                  From Dhipaya Insurance Public Company Limited
                </span>
              </p>
            </span>
          </span>
        ),
      },
      {
        name: 'button',
        className: 'banner3-button',
        children: (
          <span>
            <p>Get Start</p>
          </span>
        ),
      },
    ],
  },
};
export const Pricing20DataSource = {
  wrapper: { className: 'home-page-wrapper pricing2-wrapper' },
  page: { className: 'home-page pricing2' },
  OverPack: { playScale: 0.3, className: 'pricing2-content-wrapper' },
  titleWrapper: {
    className: 'pricing2-title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>
              Car insurance coverage<br />
            </p>
          </span>
        ),
        className: 'pricing2-title-h1',
      },
    ],
  },
  Table: {
    name: 'tabsTitle',
    size: 'default',
    className: 'pricing2-table',
    columns: {
      children: [
        {
          dataIndex: 'name',
          key: 'name',
          name: 'empty',
          childWrapper: {
            children: [
              { name: 'name', children: ' ' },
              { name: 'content', children: ' ' },
            ],
          },
        },
        {
          dataIndex: 'unlimited',
          key: 'unlimited',
          name: 'unlimited',
          childWrapper: {
            className: 'pricing2-table-name-block',
            children: [
              {
                name: 'name',
                className: 'pricing2-table-name',
                children: (
                  <span>
                    <span>
                      <p>Type 1</p>
                    </span>
                  </span>
                ),
              },
              {
                name: 'content',
                className: 'pricing2-table-money',
                children: (
                  <span>
                    <span>
                      <p>Start 20,000 Bath</p>
                    </span>
                  </span>
                ),
              },
            ],
          },
        },
        {
          dataIndex: 'free',
          key: 'free',
          name: 'free',
          childWrapper: {
            className: 'pricing2-table-name-block',
            children: [
              {
                name: 'name',
                className: 'pricing2-table-name',
                children: (
                  <span>
                    <span>
                      <p>Type 2</p>
                    </span>
                  </span>
                ),
              },
              {
                name: 'content',
                className: 'pricing2-table-money',
                children: (
                  <span>
                    <span>
                      <p>Start 10,000 Bath</p>
                    </span>
                  </span>
                ),
              },
            ],
          },
        },
        {
          dataIndex: 'basic',
          key: 'basic',
          name: 'basic',
          childWrapper: {
            className: 'pricing2-table-name-block',
            children: [
              {
                name: 'name',
                className: 'pricing2-table-name',
                children: (
                  <span>
                    <span>
                      <p>Type 3</p>
                    </span>
                  </span>
                ),
              },
              {
                name: 'content',
                className: 'pricing2-table-money',
                children: (
                  <span>
                    <span>
                      <p>Start 5,000 Bath</p>
                    </span>
                  </span>
                ),
              },
            ],
          },
        },
        {
          dataIndex: 'pro',
          key: 'pro',
          name: 'pro',
          childWrapper: {
            className: 'pricing2-table-name-block',
            children: [
              {
                name: 'name',
                className: 'pricing2-table-name',
                children: (
                  <span>
                    <span>
                      <span>
                        <span>
                          <blockquote>Compulsory motor insurance</blockquote>
                        </span>
                      </span>
                    </span>
                  </span>
                ),
              },
              {
                name: 'content',
                className: 'pricing2-table-money',
                children: (
                  <span>
                    <span>
                      <p>Start 500 Bath</p>
                    </span>
                  </span>
                ),
              },
            ],
          },
        },
      ],
    },
    dataSource: {
      children: [
        {
          name: 'list0',
          children: [
            {
              className: 'pricing2-table-content-name ld31g4u9sa7-editor_css',
              name: 'name',
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <p>Own damages – collision without a third party</p>
                      </span>
                    </span>
                  </span>
                </span>
              ),
            },
            {
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/14ce3060-34e6-4b30-9a45-1a6b95542310.svg',
              name: 'content0',
              className: 'pricing2-table-content',
            },
            {
              children: (
                <span>
                  <p>-</p>
                </span>
              ),
              name: 'content1',
              className: 'pricing2-table-content',
            },
            {
              children: (
                <span>
                  <p>-</p>
                </span>
              ),
              name: 'content2',
              className: 'pricing2-table-content',
            },
            {
              children: (
                <span>
                  <p>-</p>
                </span>
              ),
              name: 'content3',
              className: 'pricing2-table-content',
            },
            {
              children: 'Unlimited',
              name: 'content~ld31zjof37t',
              className: 'pricing2-table-content',
            },
          ],
        },
        {
          name: 'list1',
          children: [
            {
              className: 'pricing2-table-content-name ld31h47qu2f-editor_css',
              name: 'name',
              children: (
                <span>
                  <span>
                    <p>Own damages – collision with a third party</p>
                  </span>
                </span>
              ),
            },
            {
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/14ce3060-34e6-4b30-9a45-1a6b95542310.svg',
              name: 'content0',
              className: 'pricing2-table-content',
            },
            {
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/14ce3060-34e6-4b30-9a45-1a6b95542310.svg',
              name: 'content1',
              className: 'pricing2-table-content',
            },
            {
              children: (
                <span>
                  <p>-</p>
                </span>
              ),
              name: 'content2',
              className: 'pricing2-table-content',
            },
            {
              children: (
                <span>
                  <p>-</p>
                </span>
              ),
              name: 'content3',
              className: 'pricing2-table-content',
            },
          ],
        },
        {
          name: 'list2',
          children: [
            {
              className: 'pricing2-table-content-name ld31hacnefj-editor_css',
              name: 'name',
              children: (
                <span>
                  <span>
                    <span>
                      <p>Damages to the windscreen</p>
                    </span>
                  </span>
                </span>
              ),
            },
            {
              name: 'content0',
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/14ce3060-34e6-4b30-9a45-1a6b95542310.svg',
              className: 'pricing2-table-content',
            },
            {
              name: 'content1',
              children: (
                <span>
                  <p>-</p>
                </span>
              ),
              className: 'pricing2-table-content',
            },
            {
              name: 'content2',
              children: (
                <span>
                  <p>-</p>
                </span>
              ),
              className: 'pricing2-table-content',
            },
            {
              name: 'content3',
              children: (
                <span>
                  <p>-</p>
                </span>
              ),
              className: 'pricing2-table-content',
            },
          ],
        },
        {
          name: 'list3',
          children: [
            {
              className: 'pricing2-table-content-name ld31hklb4zq-editor_css',
              name: 'name',
              children: (
                <span>
                  <span>
                    <p>Towing service</p>
                  </span>
                </span>
              ),
            },
            {
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/14ce3060-34e6-4b30-9a45-1a6b95542310.svg',
              name: 'content0',
              className: 'pricing2-table-content',
            },
            {
              name: 'content1',
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/14ce3060-34e6-4b30-9a45-1a6b95542310.svg',
              className: 'pricing2-table-content',
            },
            {
              name: 'content2',
              children: (
                <span>
                  <p>-</p>
                </span>
              ),
              className: 'pricing2-table-content',
            },
            {
              name: 'content3',
              children: (
                <span>
                  <p>-</p>
                </span>
              ),
              className: 'pricing2-table-content',
            },
          ],
        },
        {
          name: 'list4',
          children: [
            {
              className: 'pricing2-table-content-name ld31hq0v0lu-editor_css',
              name: 'name',
              children: (
                <span>
                  <span>
                    <span>
                      <p>Theft</p>
                    </span>
                  </span>
                </span>
              ),
            },
            {
              name: 'content0',
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/14ce3060-34e6-4b30-9a45-1a6b95542310.svg',
              className: 'pricing2-table-content',
            },
            {
              name: 'content1',
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/14ce3060-34e6-4b30-9a45-1a6b95542310.svg',
              className: 'pricing2-table-content',
            },
            {
              name: 'content2',
              children: (
                <span>
                  <p>-</p>
                </span>
              ),
              className: 'pricing2-table-content',
            },
            {
              name: 'content3',
              children: (
                <span>
                  <p>-</p>
                </span>
              ),
              className: 'pricing2-table-content',
            },
          ],
        },
        {
          name: 'list5',
          children: [
            {
              className: 'pricing2-table-content-name ld31hxm61jd-editor_css',
              name: 'name',
              children: (
                <span>
                  <span>
                    <p>Fire</p>
                  </span>
                </span>
              ),
            },
            {
              name: 'content0',
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/14ce3060-34e6-4b30-9a45-1a6b95542310.svg',
              className: 'pricing2-table-content',
            },
            {
              name: 'content1',
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/14ce3060-34e6-4b30-9a45-1a6b95542310.svg',
              className: 'pricing2-table-content',
            },
            {
              name: 'content2',
              children: (
                <span>
                  <p>-</p>
                </span>
              ),
              className: 'pricing2-table-content',
            },
            {
              name: 'content3',
              children: (
                <span>
                  <p>-</p>
                </span>
              ),
              className: 'pricing2-table-content',
            },
          ],
        },
        {
          name: 'list~ld31h8vi487',
          children: [
            {
              className: 'pricing2-table-content-name ld31ieq9vlh-editor_css',
              name: 'name',
              children: (
                <span>
                  <span>
                    <p>Natural disaster, including flood</p>
                  </span>
                </span>
              ),
            },
            {
              name: 'content0',
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/14ce3060-34e6-4b30-9a45-1a6b95542310.svg',
              className: 'pricing2-table-content',
            },
            {
              name: 'content1',
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/14ce3060-34e6-4b30-9a45-1a6b95542310.svg',
              className: 'pricing2-table-content',
            },
            {
              name: 'content2',
              children: '-',
              className: 'pricing2-table-content',
            },
            {
              name: 'content3',
              children: (
                <span>
                  <p>-</p>
                </span>
              ),
              className: 'pricing2-table-content',
            },
          ],
        },
        {
          name: 'list~ld31i6oiy0t',
          children: [
            {
              className: 'pricing2-table-content-name ld31nzj29f-editor_css',
              name: 'name',
              children: (
                <span>
                  <span>
                    <p>Liability for third party property damages</p>
                  </span>
                </span>
              ),
            },
            {
              name: 'content0',
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/14ce3060-34e6-4b30-9a45-1a6b95542310.svg',
              className: 'pricing2-table-content',
            },
            {
              name: 'content1',
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/14ce3060-34e6-4b30-9a45-1a6b95542310.svg',
              className: 'pricing2-table-content',
            },
            {
              name: 'content2',
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/14ce3060-34e6-4b30-9a45-1a6b95542310.svg',
              className: 'pricing2-table-content',
            },
            {
              name: 'content3',
              children: (
                <span>
                  <span>
                    <p>-</p>
                  </span>
                </span>
              ),
              className: 'pricing2-table-content',
            },
          ],
        },
        {
          name: 'list~ld31i7h1rvc',
          children: [
            {
              className: 'pricing2-table-content-name ld31o1idhrg-editor_css',
              name: 'name',
              children: (
                <span>
                  <span>
                    <p>
                      Liability for third party bodily injuries and loss of life
                    </p>
                  </span>
                </span>
              ),
            },
            {
              name: 'content0',
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/14ce3060-34e6-4b30-9a45-1a6b95542310.svg',
              className: 'pricing2-table-content',
            },
            {
              name: 'content1',
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/14ce3060-34e6-4b30-9a45-1a6b95542310.svg',
              className: 'pricing2-table-content',
            },
            {
              name: 'content2',
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/14ce3060-34e6-4b30-9a45-1a6b95542310.svg',
              className: 'pricing2-table-content',
            },
            {
              name: 'content3',
              children: (
                <span>
                  <p>Limited</p>
                </span>
              ),
              className: 'pricing2-table-content',
            },
          ],
        },
        {
          name: 'list~ld31oeje3es',
          children: [
            {
              className: 'pricing2-table-content-name ld31o1idhrg-editor_css',
              name: 'name',
              children: (
                <span>
                  <span>
                    <p>Medical expenses</p>
                  </span>
                </span>
              ),
            },
            {
              name: 'content0',
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/14ce3060-34e6-4b30-9a45-1a6b95542310.svg',
              className: 'pricing2-table-content',
            },
            {
              name: 'content1',
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/14ce3060-34e6-4b30-9a45-1a6b95542310.svg',
              className: 'pricing2-table-content',
            },
            {
              name: 'content2',
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/14ce3060-34e6-4b30-9a45-1a6b95542310.svg',
              className: 'pricing2-table-content',
            },
            {
              name: 'content3',
              children: (
                <span>
                  <p>Limited</p>
                </span>
              ),
              className: 'pricing2-table-content',
            },
          ],
        },
        {
          name: 'list~ld31p34tmsg',
          children: [
            {
              className: 'pricing2-table-content-name ld31o1idhrg-editor_css',
              name: 'name',
              children: (
                <span>
                  <span>
                    <span>
                      <p>Personal accident coverage</p>
                    </span>
                  </span>
                </span>
              ),
            },
            {
              name: 'content0',
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/14ce3060-34e6-4b30-9a45-1a6b95542310.svg',
              className: 'pricing2-table-content',
            },
            {
              name: 'content1',
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/14ce3060-34e6-4b30-9a45-1a6b95542310.svg',
              className: 'pricing2-table-content',
            },
            {
              name: 'content2',
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/14ce3060-34e6-4b30-9a45-1a6b95542310.svg',
              className: 'pricing2-table-content',
            },
            {
              name: 'content3',
              children: (
                <span>
                  <p>Limited</p>
                </span>
              ),
              className: 'pricing2-table-content',
            },
          ],
        },
        {
          name: 'list~ld31p3fnqlr',
          children: [
            {
              className: 'pricing2-table-content-name ld31o1idhrg-editor_css',
              name: 'name',
              children: (
                <span>
                  <span>
                    <span>
                      <p>Bail bond coverage</p>
                    </span>
                  </span>
                </span>
              ),
            },
            {
              name: 'content0',
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/14ce3060-34e6-4b30-9a45-1a6b95542310.svg',
              className: 'pricing2-table-content',
            },
            {
              name: 'content1',
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/14ce3060-34e6-4b30-9a45-1a6b95542310.svg',
              className: 'pricing2-table-content',
            },
            {
              name: 'content2',
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/14ce3060-34e6-4b30-9a45-1a6b95542310.svg',
              className: 'pricing2-table-content',
            },
            {
              name: 'content3',
              children: (
                <span>
                  <p>Limited</p>
                </span>
              ),
              className: 'pricing2-table-content',
            },
          ],
        },
      ],
    },
  },
};
export const Teams20DataSource = {
  wrapper: { className: 'home-page-wrapper teams2-wrapper' },
  page: { className: 'home-page teams2' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: 'Customer Feedback' }],
  },
  block: {
    className: 'block-wrapper',
    gutter: 72,
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://www.tipinsure.com/files/testimonial/03_Antika-min.jpg',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: (
                <span>
                  <span>
                    <p>คุณอันธิกา ดำทองสุก</p>
                  </span>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: (
                <span>
                  <p>
                    “ดีงาม สวย เก่ง บริการดี เปนกันเอง. แนะนำเยี่ยม. สบายใจเวอร์
                    ขอบคุณนะคะคุนฟ้า”
                  </p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://www.tipinsure.com/files/testimonial/01_Kamonkhan-min.jpg',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: (
                <span>
                  <span>
                    <p>คุณกมลขัณฑ์ อังศุภัทร์ </p>
                  </span>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: (
                <span>
                  <p>“ไวกว่าเสือชีตาร์ ก็ทิพยประกันภัยนึ้แหละ”</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children: 'https://www.tipinsure.com/files/testimonial/8_323214.jpg',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: (
                <span>
                  <span>
                    <p>คุณกัณญ์ชิณัต เกษมสันต์ ณ อยุธยา</p>
                  </span>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <p>
                          “พนักงานเซอเวย์มีกริยามารยาทดีเยี่ยม
                          ให้ข้อมูลรายละเอียดในการเคลมอย่างครบถ้วน
                        </p>
                      </span>
                    </span>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://www.tipinsure.com/files/testimonial/04_Pantira-min.jpg',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: (
                <span>
                  <p>คุณภัณฑิรา ขันตี</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: (
                <span>
                  <p>
                    “ งานเคลมบอกทิพย ส่งพนักงานน่ารักมาก
                    จากร้อนกลายเป็นเย็นได้เลย กิกิ”
                  </p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://www.tipinsure.com/files/testimonial/05_Panisara-min.jpg',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: (
                <span>
                  <p>คุณปาณิสรา บุญเนตร</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: (
                <span>
                  <p>“มาเร็ว เคลมดี บริการประทับใจ ต้องทิพยประกันภัย”</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block5',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://www.tipinsure.com/files/testimonial/07_Pannapa-min.jpg',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: (
                <span>
                  <p>คุณพรรณพา เพ็ญการ</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: (
                <span>
                  <span>
                    <p>“บริการ รวดเร็ว ทันใจ ทิพยประกันภัย”</p>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block6',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://www.tipinsure.com/files/testimonial/10_Pasit_S.jpg',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: (
                <span>
                  <p>Khun Pasit Sangarsittichai</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: (
                <span>
                  <p>“ขอชมเชย ส่วนสินไหม บริการไวมากคับ”</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block7',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://www.tipinsure.com/files/testimonial/06_Benjapat-min.jpg',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: (
                <span>
                  <p>คุณเบญจพักตร์ ทองคำขาว</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: (
                <span>
                  <span>
                    <span>
                      <p>
                        “เคลมดี บอกต่อ เคลมไว มาไว ประทับใจพี่ที่รับเคลมค่ะ
                        ทิพยประกันภัย”
                      </p>
                    </span>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block8',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://www.tipinsure.com/files/testimonial/11_naticha.jpg',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: (
                <span>
                  <p>คุณณัฐณิชา วงศ์วิริยะธรรม</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: (
                <span>
                  <p>“ขอบคุณทิพยประกันภัยมากค่ะ ดูแลลูกค้าอย่างดี"</p>
                </span>
              ),
            },
          ],
        },
      },
    ],
  },
};
export const Content30DataSource = {
  wrapper: { className: 'home-page-wrapper content3-wrapper' },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <span>
              <p>Why TIP Insure</p>
            </span>
          </span>
        ),
        className: 'title-h1',
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://www.tipinsure.com/new_design_5/assets/img/icon-valued.svg',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>Good Value</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>
                  Price worthy for the additional coverage along with insurance
                  premiums at special tipdirect price and appealing promotions.
                </p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://www.tipinsure.com/new_design_5/assets/img/icon-claimed.svg',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>Submit claims with ease</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <span>
                  <span>
                    <p>
                      Tip Smart Survey utilizes the latest 3G mobile technology
                      and tablets to instantly print repairs orders. You can
                      also submit claims by yourself using Tip Flash Claim
                      application “quick, anywhere and anytime”.
                    </p>
                  </span>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://www.tipinsure.com/new_design_5/assets/img/icon-response.svg',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>Covers all your needs</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <span>
                  <p>We have a variety of insurance products for you</p>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: 'block3',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://www.tipinsure.com/new_design_5/assets/img/icon-24service.svg',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>24 hr. service</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <span>
                  <span>
                    <p>
                      We provide 24 hours around the clock service for insurance
                      purchase via Tip insure website as well as an accident
                      hotline to help you via our Call Center at 1736.
                    </p>
                  </span>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: 'block4',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://www.tipinsure.com/new_design_5/assets/img/icon-safe.svg',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>Safe and worry free</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <span>
                  <span>
                    <p>
                      Confidently purchase motor insurance online and safely
                      make payments via SSL security standard.
                    </p>
                  </span>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: 'block5',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://www.tipinsure.com/new_design_5/assets/img/icon-trust.svg',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>Confidence in trusted insurer</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>
                  With the government sector being a major shareholder, we have
                  over 68 years of stability, good corporate governance,
                  economic and social responsibilities.
                </p>
              </span>
            ),
          },
        },
      },
    ],
  },
};
export const Footer10DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1', playScale: 0.2 },
  block: {
    className: 'home-page ld2zjljen1m-editor_css',
    gutter: 0,
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          className: 'logo',
          children:
            'https://www.prachachat.net/wp-content/uploads/2020/07/Tip-logo.png',
        },
        childWrapper: {
          className: 'slogan',
          children: [
            {
              name: 'content0',
              children: (
                <span>
                  <p>
                    <br />
                  </p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          children: (
            <span>
              <span>
                <span>
                  <span>
                    <p>TIP Service</p>
                  </span>
                </span>
              </span>
            </span>
          ),
        },
        childWrapper: {
          children: [
            {
              name: 'link0',
              href: '#',
              children: (
                <span>
                  <p>Check Policy</p>
                </span>
              ),
            },
            {
              name: 'link1',
              href: '#',
              children: (
                <span>
                  <p>Download Forms</p>
                </span>
              ),
            },
            {
              name: 'link2',
              href: '#',
              children: (
                <span>
                  <p>General Claim</p>
                </span>
              ),
            },
            {
              name: 'link3',
              href: '#',
              children: (
                <span>
                  <p>Payment Method</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          children: (
            <span>
              <span>
                <p>Product</p>
              </span>
            </span>
          ),
        },
        childWrapper: {
          children: [
            {
              href: 'https://main-dancing-wisp-c68e2b.netlify.app/',
              name: 'link0',
              children: (
                <span>
                  <p>Car Insurance</p>
                </span>
              ),
              target: '_blank',
            },
            {
              href: '#',
              name: 'link1',
              children: (
                <span>
                  <p>Travel Insurance</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          children: (
            <span>
              <p>Investor Relations</p>
            </span>
          ),
        },
        childWrapper: {
          children: [
            {
              href: '#',
              name: 'link0',
              children: (
                <span>
                  <p>Annual Report</p>
                </span>
              ),
            },
            {
              href: '#',
              name: 'link1',
              children: (
                <span>
                  <span>
                    <p>Contact Investor Relations</p>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        <span>
          <p>
            Copyright 2020 Dhipaya Insurance Public Company Limited<br />
          </p>
        </span>
      </span>
    ),
  },
};
