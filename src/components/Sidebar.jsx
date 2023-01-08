import logoFallback from "../images/Sideup-Logo.png";
import logo from "../images/Sideup-Logo.webp";
import "./Sidebar.css";

export default function Sidebar() {
  /* 
  Seed data for navbar links
  P.S. 
  Can be turned into an array of objects with each link's URL like so:
  [
    {name: 'Dashboard', url: 'example.com',},
    {name: 'My Shipments', url: 'example2.com',}, etc.
  ]
  */
  const navLinks = [
    "Dashboard",
    "My Shipments",
    "My Customers",
    "Reports",
    "Cash Transfers",
    "Invoices",
    "Integrations",
    "Marketing Tools",
    "International Prices",
    "Support",
    "Sign Out",
  ];

  return (
    <nav className="sidebar" id="hide-for-mobile">
      <div className="logo-container">
        <img
          className="logo"
          src={logo}
          onError={() => (this.src = logoFallback)}
          alt="SideUp"
        />
      </div>
      <div className="links-container">
        {navLinks.map((item, index) => (
          <div className="nav-link-row" key={index}>
            {/* To be converted to an <a> tag with a link */}
            <div className="nav-link-hover-button"></div>
            {/* Task sheet svg */}
            {window.matchMedia("(max-width: 992px)").matches ? (
              <svg
                className="nav-link-logo"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none">
                <path
                  d="M12.9124 6.46403V1.38118C12.912 1.0691 12.7906 0.769925 12.5747 0.54925C12.3589 0.328576 12.0663 0.204411 11.761 0.203979H1.35087C1.04563 0.204411 0.753009 0.328576 0.537169 0.54925C0.32133 0.769925 0.199885 1.0691 0.199463 1.38118L0.199463 12.0245C0.199885 12.3366 0.32133 12.6358 0.537169 12.8565C0.753009 13.0771 1.04563 13.2013 1.35087 13.2017H8.05347C8.45133 13.7561 8.97113 14.207 9.57088 14.518C10.1706 14.8291 10.8335 14.9915 11.506 14.9923C12.1785 14.9931 12.8418 14.8322 13.4423 14.5225C14.0427 14.2129 14.5635 13.7632 14.9626 13.2098C15.3617 12.6564 15.6279 12.0148 15.7397 11.3368C15.8515 10.6588 15.8058 9.96337 15.6062 9.30677C15.4067 8.65017 15.0589 8.05076 14.591 7.55694C14.123 7.06312 13.548 6.68873 12.9124 6.46403ZM5.42589 1.16255H7.68762V3.80778L6.7301 3.41701C6.61842 3.37147 6.4939 3.37147 6.38221 3.41701L5.42469 3.80778L5.42589 1.16255ZM1.35087 12.2436C1.29405 12.2436 1.23956 12.2205 1.19938 12.1794C1.1592 12.1383 1.13663 12.0826 1.13663 12.0245V1.38118C1.13663 1.32309 1.1592 1.26737 1.19938 1.22629C1.23956 1.18522 1.29405 1.16214 1.35087 1.16214H4.48753V4.51508C4.48753 4.59339 4.50631 4.6705 4.54221 4.73967C4.5781 4.80884 4.63003 4.86797 4.69345 4.91188C4.75686 4.95579 4.82984 4.98314 4.90599 4.99155C4.98213 4.99995 5.05914 4.98915 5.13026 4.9601L6.55576 4.37762L7.98125 4.9601C8.05238 4.98915 8.12938 4.99995 8.20553 4.99155C8.28168 4.98314 8.35465 4.95579 8.41807 4.91188C8.48148 4.86797 8.53341 4.80884 8.56931 4.73967C8.6052 4.6705 8.62398 4.59339 8.62399 4.51508V1.16255H11.7606C11.8175 1.16255 11.872 1.18562 11.9121 1.2267C11.9523 1.26778 11.9749 1.32349 11.9749 1.38159V6.24947C11.2385 6.1678 10.494 6.28248 9.81385 6.58234C9.1337 6.8822 8.54109 7.35703 8.09373 7.96059C7.64637 8.56415 7.3595 9.27587 7.26106 10.0264C7.16263 10.777 7.25598 11.5408 7.53202 12.2436H1.35087ZM11.5121 14.0383C10.8493 14.0383 10.2013 13.8374 9.6502 13.4609C9.09909 13.0844 8.66954 12.5493 8.41589 11.9232C8.16224 11.2971 8.09587 10.6082 8.22518 9.94352C8.35449 9.27887 8.67367 8.66835 9.14236 8.18916C9.61105 7.70998 10.2082 7.38365 10.8583 7.25144C11.5084 7.11923 12.1822 7.18709 12.7946 7.44642C13.4069 7.70575 13.9303 8.14492 14.2986 8.70838C14.6668 9.27184 14.8634 9.9343 14.8634 10.612C14.8617 11.5199 14.5081 12.3901 13.88 13.032C13.2519 13.6739 12.4005 14.035 11.5125 14.0363L11.5121 14.0383Z"
                  fill="#333737"
                />
                <path
                  d="M11.5125 15.1988C10.796 15.1985 10.09 15.0229 9.45345 14.6869C8.86909 14.376 8.3579 13.9388 7.95534 13.4056H1.35089C0.992743 13.4052 0.649383 13.2596 0.396134 13.0006C0.142884 12.7417 0.000422346 12.3907 0 12.0245V1.38115C0.000422346 1.01498 0.142884 0.663929 0.396134 0.405007C0.649383 0.146084 0.992743 0.000431806 1.35089 0L11.7611 0C12.1192 0.000431806 12.4626 0.146084 12.7158 0.405007C12.9691 0.663929 13.1115 1.01498 13.112 1.38115V6.32246C14.0922 6.70507 14.9104 7.42668 15.4244 8.36191C15.9385 9.29715 16.1158 10.3869 15.9257 11.442C15.7356 12.497 15.19 13.4506 14.3837 14.1371C13.5774 14.8236 12.5614 15.1997 11.5121 15.2L11.5125 15.1988ZM1.35089 0.4079C1.09852 0.408224 0.85658 0.510867 0.678127 0.693316C0.499674 0.875766 0.399281 1.12313 0.398964 1.38115V12.0245C0.399281 12.2825 0.499674 12.5299 0.678127 12.7123C0.85658 12.8948 1.09852 12.9974 1.35089 12.9977H8.15602L8.21587 13.0793C8.59063 13.5994 9.07689 14.0248 9.63737 14.323C10.2163 14.6312 10.8598 14.7912 11.5125 14.7892C12.4789 14.7878 13.4137 14.4365 14.1509 13.7976C14.8882 13.1588 15.3804 12.2736 15.5402 11.2992C15.7001 10.3247 15.5173 9.32381 15.0242 8.47399C14.5312 7.62416 13.7597 6.98029 12.8466 6.65653L12.7126 6.60921V1.38115C12.7123 1.1232 12.6119 0.875898 12.4336 0.69346C12.2552 0.511022 12.0134 0.408332 11.7611 0.4079H1.35089ZM11.5125 14.2402C10.8102 14.2402 10.1237 14.0273 9.5398 13.6284C8.95587 13.2295 8.50076 12.6625 8.23201 11.9992C7.96326 11.3358 7.89294 10.6059 8.02995 9.90166C8.16696 9.19745 8.50514 8.55059 9.00172 8.04288C9.49831 7.53517 10.131 7.18942 10.8198 7.04934C11.5086 6.90926 12.2225 6.98115 12.8713 7.25592C13.5201 7.53069 14.0747 7.996 14.4649 8.593C14.855 9.19001 15.0633 9.89189 15.0633 10.6099C15.062 11.5723 14.6875 12.495 14.0219 13.1755C13.3563 13.856 12.4538 14.2389 11.5125 14.2402ZM11.5125 7.38748C10.8891 7.38748 10.2798 7.57648 9.76145 7.93056C9.24314 8.28464 8.83916 8.78791 8.60061 9.37673C8.36205 9.96555 8.29964 10.6135 8.42125 11.2386C8.54286 11.8636 8.84304 12.4378 9.28383 12.8885C9.72462 13.3391 10.2862 13.6461 10.8976 13.7704C11.509 13.8947 12.1427 13.8309 12.7187 13.587C13.2946 13.3431 13.7868 12.9301 14.1331 12.4002C14.4795 11.8703 14.6643 11.2472 14.6643 10.6099C14.6635 9.75541 14.3312 8.93615 13.7403 8.33183C13.1495 7.7275 12.3483 7.38745 11.5125 7.38626V7.38748ZM7.82727 12.4475H1.35089C1.24127 12.4473 1.1362 12.4026 1.05872 12.3233C0.981239 12.244 0.937671 12.1366 0.937565 12.0245V1.38115C0.937776 1.26914 0.981391 1.16178 1.05886 1.08258C1.13633 1.00337 1.24134 0.958781 1.35089 0.958566H4.68703V4.51546C4.68703 4.56043 4.6978 4.60471 4.71841 4.64444C4.73901 4.68417 4.76882 4.71814 4.80523 4.74337C4.84164 4.7686 4.88354 4.78433 4.92726 4.78918C4.97099 4.79404 5.01521 4.78787 5.05607 4.77121L6.55578 4.15936L8.05548 4.77121C8.09639 4.78766 8.14059 4.79372 8.18429 4.78889C8.22799 4.78406 8.2699 4.76848 8.30643 4.74347C8.3431 4.71847 8.37319 4.68463 8.39406 4.64494C8.41493 4.60525 8.42594 4.56093 8.42612 4.51587V0.958566H11.7623C11.872 0.958674 11.9771 1.00327 12.0547 1.08258C12.1323 1.16188 12.1759 1.26941 12.176 1.38156V6.47664L11.955 6.45217C11.3838 6.38839 10.8059 6.44837 10.2589 6.6282C9.71186 6.80802 9.20806 7.10366 8.78028 7.49584C8.3525 7.88802 8.01033 8.36796 7.77608 8.90437C7.54183 9.44078 7.42075 10.0216 7.42073 10.6091C7.41995 11.1429 7.51993 11.6718 7.71516 12.1669L7.82727 12.4475ZM1.35089 1.36647C1.34698 1.36647 1.34322 1.36806 1.34045 1.37089C1.33769 1.37372 1.33613 1.37756 1.33613 1.38156V12.0245C1.33613 12.0285 1.33769 12.0323 1.34045 12.0352C1.34322 12.038 1.34698 12.0396 1.35089 12.0396H7.24678C7.02581 11.3503 6.96775 10.6174 7.07735 9.90075C7.18696 9.18414 7.46111 8.50428 7.87733 7.9169C8.29355 7.32953 8.84 6.85136 9.47187 6.5216C10.1038 6.19184 10.8031 6.01987 11.5125 6.01979C11.5999 6.01979 11.688 6.02265 11.7758 6.02754V1.38115C11.7758 1.37715 11.7743 1.37331 11.7715 1.37048C11.7687 1.36765 11.765 1.36606 11.7611 1.36606H8.82389V4.51505C8.82395 4.62685 8.79718 4.73695 8.74592 4.8357C8.69467 4.93446 8.6205 5.01884 8.52991 5.08146C8.43932 5.14407 8.33509 5.18301 8.22636 5.19484C8.11763 5.20668 8.00772 5.19105 7.90627 5.14933L6.55458 4.59704L5.20289 5.14933C5.10144 5.19105 4.99153 5.20668 4.8828 5.19484C4.77406 5.18301 4.66983 5.14407 4.57925 5.08146C4.48866 5.01884 4.41449 4.93446 4.36323 4.8357C4.31198 4.73695 4.28521 4.62685 4.28527 4.51505V1.36647H1.35089ZM7.88632 4.10919L6.65592 3.60625C6.59184 3.58035 6.52051 3.58035 6.45643 3.60625L5.22643 4.10878V0.958566H7.88712L7.88632 4.10919ZM6.55617 3.17918C6.64103 3.17908 6.72512 3.19555 6.80393 3.22772L7.48736 3.50713V1.36647H5.62539V3.50794L6.30882 3.22894C6.38739 3.19627 6.47135 3.17924 6.55617 3.17877V3.17918Z"
                  fill="#333737"
                />
                <path
                  d="M13.2189 10.1621H11.9498V8.86454C11.9498 8.73743 11.9004 8.61551 11.8125 8.52563C11.7246 8.43575 11.6053 8.38525 11.481 8.38525C11.3567 8.38525 11.2374 8.43575 11.1495 8.52563C11.0616 8.61551 11.0122 8.73743 11.0122 8.86454V10.6414C11.0122 10.7685 11.0616 10.8904 11.1495 10.9803C11.2374 11.0701 11.3567 11.1206 11.481 11.1206H13.2189C13.3432 11.1206 13.4624 11.0701 13.5504 10.9803C13.6383 10.8904 13.6877 10.7685 13.6877 10.6414C13.6877 10.5142 13.6383 10.3923 13.5504 10.3025C13.4624 10.2126 13.3432 10.1621 13.2189 10.1621Z"
                  fill="#333737"
                />
                <path
                  d="M13.2189 11.3261H11.481C11.3038 11.3259 11.134 11.2539 11.0087 11.1258C10.8834 10.9977 10.813 10.824 10.8127 10.6429V8.8661C10.8127 8.6849 10.8832 8.51111 11.0085 8.38298C11.1338 8.25485 11.3038 8.18286 11.481 8.18286C11.6582 8.18286 11.8282 8.25485 11.9535 8.38298C12.0789 8.51111 12.1493 8.6849 12.1493 8.8661V9.95968H13.2189C13.3961 9.95968 13.5661 10.0317 13.6914 10.1598C13.8167 10.2879 13.8872 10.4617 13.8872 10.6429C13.8872 10.8241 13.8167 10.9979 13.6914 11.126C13.5661 11.2542 13.3961 11.3261 13.2189 11.3261ZM11.481 8.59076C11.4096 8.59087 11.3412 8.61991 11.2907 8.67153C11.2402 8.72314 11.2118 8.79311 11.2117 8.8661V10.6429C11.2117 10.7159 11.2401 10.786 11.2906 10.8376C11.3411 10.8892 11.4096 10.9182 11.481 10.9182H13.2189C13.2903 10.9182 13.3588 10.8892 13.4093 10.8376C13.4598 10.786 13.4882 10.7159 13.4882 10.6429C13.4882 10.5699 13.4598 10.4999 13.4093 10.4482C13.3588 10.3966 13.2903 10.3676 13.2189 10.3676H11.7503V8.8661C11.7505 8.82982 11.7436 8.79386 11.7302 8.76029C11.7167 8.72672 11.6969 8.6962 11.6719 8.67047C11.6469 8.64474 11.6171 8.62431 11.5844 8.61036C11.5516 8.5964 11.5165 8.58918 11.481 8.58913V8.59076Z"
                  fill="#333737"
                />
              </svg>
            ) : (
              <svg
                className="nav-link-logo"
                width="20"
                height="19"
                viewBox="0 0 20 19">
                <path d="M16.1405 8.07994V1.72638C16.14 1.33628 15.9882 0.962314 15.7184 0.686471C15.4486 0.410628 15.0828 0.255422 14.7012 0.254883H1.68853C1.30698 0.255422 0.9412 0.410628 0.671401 0.686471C0.401601 0.962314 0.249795 1.33628 0.249268 1.72638L0.249268 15.0306C0.249795 15.4207 0.401601 15.7946 0.671401 16.0705C0.9412 16.3463 1.30698 16.5015 1.68853 16.5021H10.0668C10.5641 17.195 11.2138 17.7586 11.9635 18.1474C12.7132 18.5362 13.5419 18.7393 14.3825 18.7403C15.2231 18.7413 16.0522 18.5401 16.8028 18.153C17.5533 17.766 18.2043 17.2039 18.7032 16.5121C19.2021 15.8204 19.5348 15.0183 19.6746 14.1708C19.8143 13.3234 19.7572 12.4541 19.5077 11.6334C19.2583 10.8126 18.8236 10.0634 18.2386 9.44608C17.6537 8.8288 16.935 8.36082 16.1405 8.07994ZM6.7823 1.45309H9.60946V4.75963L8.41257 4.27117C8.27296 4.21425 8.11731 4.21425 7.9777 4.27117L6.78081 4.75963L6.7823 1.45309ZM1.68853 15.3044C1.6175 15.3044 1.54939 15.2755 1.49916 15.2242C1.44894 15.1728 1.42073 15.1032 1.42073 15.0306V1.72638C1.42073 1.65377 1.44894 1.58412 1.49916 1.53278C1.54939 1.48143 1.6175 1.45258 1.68853 1.45258H5.60935V5.64376C5.60936 5.74164 5.63282 5.83803 5.6777 5.92449C5.72257 6.01096 5.78748 6.08487 5.86675 6.13975C5.94602 6.19464 6.03724 6.22883 6.13242 6.23934C6.22761 6.24985 6.32386 6.23635 6.41276 6.20003L8.19463 5.47193L9.97651 6.20003C10.0654 6.23635 10.1617 6.24985 10.2568 6.23934C10.352 6.22883 10.4433 6.19464 10.5225 6.13975C10.6018 6.08487 10.6667 6.01096 10.7116 5.92449C10.7564 5.83803 10.7799 5.74164 10.7799 5.64376V1.45309H14.7007C14.7718 1.45309 14.8399 1.48194 14.8901 1.53329C14.9403 1.58463 14.9685 1.65428 14.9685 1.72689V7.81175C14.0481 7.70965 13.1174 7.853 12.2672 8.22783C11.4171 8.60266 10.6763 9.1962 10.1171 9.95065C9.5579 10.7051 9.19931 11.5947 9.07627 12.5329C8.95323 13.4712 9.06991 14.426 9.41497 15.3044H1.68853ZM14.39 17.5478C13.5615 17.5478 12.7516 17.2966 12.0627 16.826C11.3738 16.3554 10.8369 15.6865 10.5198 14.9039C10.2027 14.1213 10.1198 13.2601 10.2814 12.4293C10.4431 11.5985 10.842 10.8353 11.4279 10.2364C12.0137 9.63738 12.7602 9.22947 13.5728 9.06421C14.3854 8.89895 15.2277 8.98376 15.9932 9.30793C16.7586 9.6321 17.4129 10.1811 17.8732 10.8854C18.3335 11.5897 18.5792 12.4178 18.5792 13.2649C18.5771 14.3998 18.135 15.4876 17.3499 16.2899C16.5648 17.0922 15.5006 17.5437 14.3905 17.5453L14.39 17.5478Z" />
                <path d="M14.3906 18.9985C13.4951 18.9981 12.6126 18.7787 11.8168 18.3586C11.0864 17.9699 10.4474 17.4235 9.94418 16.7571H1.68861C1.24093 16.7565 0.811729 16.5745 0.495167 16.2508C0.178605 15.9271 0.000527933 15.4883 0 15.0306V1.72644C0.000527933 1.26872 0.178605 0.829911 0.495167 0.506258C0.811729 0.182605 1.24093 0.000539758 1.68861 0L14.7013 0C15.149 0.000539758 15.5782 0.182605 15.8948 0.506258C16.2113 0.829911 16.3894 1.26872 16.3899 1.72644V7.90307C17.6153 8.38134 18.638 9.28334 19.2806 10.4524C19.9231 11.6214 20.1448 12.9837 19.9071 14.3024C19.6694 15.6212 18.9875 16.8132 17.9796 17.6714C16.9718 18.5295 15.7017 18.9996 14.3901 19L14.3906 18.9985ZM1.68861 0.509875C1.37315 0.51028 1.07072 0.638583 0.847659 0.866646C0.624593 1.09471 0.499101 1.40391 0.498705 1.72644V15.0306C0.499101 15.3531 0.624593 15.6623 0.847659 15.8904C1.07072 16.1185 1.37315 16.2468 1.68861 16.2472H10.195L10.2698 16.3492C10.7383 16.9992 11.3461 17.531 12.0467 17.9038C12.7704 18.289 13.5747 18.489 14.3906 18.4866C15.5987 18.4847 16.7671 18.0456 17.6887 17.247C18.6102 16.4485 19.2255 15.3421 19.4253 14.124C19.6251 12.9059 19.3966 11.6548 18.7803 10.5925C18.164 9.53021 17.1997 8.72537 16.0583 8.32066L15.8907 8.26151V1.72644C15.8903 1.404 15.7649 1.09487 15.542 0.866825C15.319 0.638778 15.0167 0.510415 14.7013 0.509875H1.68861ZM14.3906 17.8003C13.5128 17.8003 12.6546 17.5341 11.9247 17.0355C11.1948 16.5369 10.626 15.8281 10.29 14.9989C9.95408 14.1698 9.86618 13.2573 10.0374 12.3771C10.2087 11.4968 10.6314 10.6882 11.2522 10.0536C11.8729 9.41896 12.6637 8.98677 13.5247 8.81167C14.3857 8.63658 15.2781 8.72644 16.0892 9.06991C16.9002 9.41337 17.5934 9.995 18.0811 10.7413C18.5688 11.4875 18.8291 12.3649 18.8291 13.2624C18.8275 14.4654 18.3594 15.6187 17.5274 16.4694C16.6953 17.32 15.5673 17.7986 14.3906 17.8003V17.8003ZM14.3906 9.23435C13.6114 9.23435 12.8497 9.47059 12.2018 9.9132C11.5539 10.3558 11.0489 10.9849 10.7508 11.7209C10.4526 12.4569 10.3745 13.2668 10.5266 14.0482C10.6786 14.8296 11.0538 15.5473 11.6048 16.1106C12.1558 16.6739 12.8578 17.0576 13.622 17.213C14.3863 17.3684 15.1784 17.2886 15.8983 16.9838C16.6182 16.6789 17.2335 16.1626 17.6664 15.5002C18.0993 14.8378 18.3304 14.059 18.3304 13.2624C18.3293 12.1943 17.914 11.1702 17.1754 10.4148C16.4368 9.65938 15.4353 9.23431 14.3906 9.23283V9.23435ZM9.78409 15.5594H1.68861C1.55158 15.5591 1.42025 15.5033 1.3234 15.4042C1.22655 15.3051 1.17209 15.1707 1.17196 15.0306V1.72644C1.17222 1.58643 1.22674 1.45222 1.32357 1.35322C1.42041 1.25422 1.55167 1.19848 1.68861 1.19821H5.85879V5.64432C5.85879 5.70053 5.87225 5.75589 5.89801 5.80555C5.92376 5.85521 5.96103 5.89767 6.00654 5.92921C6.05205 5.96075 6.10442 5.98041 6.15908 5.98648C6.21374 5.99255 6.26902 5.98483 6.32009 5.96401L8.19472 5.1992L10.0694 5.96401C10.1205 5.98457 10.1757 5.99215 10.2304 5.98612C10.285 5.98008 10.3374 5.9606 10.383 5.92934C10.4289 5.89809 10.4665 5.85579 10.4926 5.80618C10.5187 5.75657 10.5324 5.70116 10.5326 5.64483V1.19821H14.7028C14.8399 1.19834 14.9714 1.25409 15.0684 1.35322C15.1653 1.45235 15.2198 1.58676 15.22 1.72695V8.0958L14.9437 8.06521C14.2297 7.98549 13.5073 8.06046 12.8236 8.28524C12.1398 8.51002 11.5101 8.87957 10.9753 9.3698C10.4406 9.86003 10.0129 10.4599 9.7201 11.1305C9.42729 11.801 9.27594 12.527 9.27591 13.2614C9.27494 13.9286 9.39991 14.5897 9.64396 15.2086L9.78409 15.5594ZM1.68861 1.70808C1.68372 1.70808 1.67903 1.71007 1.67557 1.71361C1.67211 1.71715 1.67016 1.72194 1.67016 1.72695V15.0306C1.67016 15.0356 1.67211 15.0404 1.67557 15.044C1.67903 15.0475 1.68372 15.0495 1.68861 15.0495H9.05848C8.78226 14.1879 8.70969 13.2717 8.84669 12.3759C8.9837 11.4802 9.32638 10.6303 9.84666 9.89613C10.3669 9.16191 11.05 8.5642 11.8398 8.152C12.6297 7.7398 13.5038 7.52484 14.3906 7.52474C14.4998 7.52474 14.6101 7.52831 14.7198 7.53443V1.72644C14.7198 1.72143 14.7178 1.71664 14.7144 1.7131C14.7109 1.70956 14.7062 1.70757 14.7013 1.70757H11.0299V5.64381C11.0299 5.78356 10.9965 5.92119 10.9324 6.04463C10.8683 6.16807 10.7756 6.27355 10.6624 6.35182C10.5492 6.43009 10.4189 6.47876 10.283 6.49355C10.147 6.50834 10.0096 6.48881 9.88284 6.43667L8.19322 5.7463L6.50361 6.43667C6.3768 6.48881 6.23941 6.50834 6.10349 6.49355C5.96758 6.47876 5.83729 6.43009 5.72406 6.35182C5.61083 6.27355 5.51811 6.16807 5.45404 6.04463C5.38997 5.92119 5.35651 5.78356 5.35659 5.64381V1.70808H1.68861ZM9.8579 5.13649L8.31989 4.50781C8.23979 4.47543 8.15064 4.47543 8.07054 4.50781L6.53303 5.13598V1.19821H9.8589L9.8579 5.13649ZM8.19522 3.97397C8.30129 3.97385 8.4064 3.99444 8.50491 4.03464L9.3592 4.38391V1.70808H7.03174V4.38493L7.88602 4.03617C7.98424 3.99534 8.08919 3.97405 8.19522 3.97346V3.97397Z" />
                <path d="M16.5235 12.7026H14.9371V11.0807C14.9371 10.9218 14.8754 10.7694 14.7655 10.657C14.6556 10.5447 14.5065 10.4816 14.3511 10.4816C14.1957 10.4816 14.0467 10.5447 13.9368 10.657C13.8269 10.7694 13.7651 10.9218 13.7651 11.0807V13.3017C13.7651 13.4606 13.8269 13.613 13.9368 13.7253C14.0467 13.8377 14.1957 13.9008 14.3511 13.9008H16.5235C16.6789 13.9008 16.8279 13.8377 16.9378 13.7253C17.0477 13.613 17.1094 13.4606 17.1094 13.3017C17.1094 13.1428 17.0477 12.9904 16.9378 12.8781C16.8279 12.7657 16.6789 12.7026 16.5235 12.7026Z" />
                <path d="M16.5236 14.1577H14.3512C14.1297 14.1575 13.9174 14.0674 13.7608 13.9073C13.6042 13.7472 13.5161 13.5301 13.5159 13.3037V11.0827C13.5159 10.8562 13.6039 10.6389 13.7605 10.4788C13.9172 10.3186 14.1297 10.2286 14.3512 10.2286C14.5727 10.2286 14.7852 10.3186 14.9419 10.4788C15.0985 10.6389 15.1865 10.8562 15.1865 11.0827V12.4497H16.5236C16.7451 12.4497 16.9576 12.5396 17.1142 12.6998C17.2709 12.86 17.3589 13.0772 17.3589 13.3037C17.3589 13.5302 17.2709 13.7474 17.1142 13.9076C16.9576 14.0678 16.7451 14.1577 16.5236 14.1577ZM14.3512 10.7385C14.262 10.7386 14.1764 10.775 14.1133 10.8395C14.0502 10.904 14.0147 10.9915 14.0146 11.0827V13.3037C14.0146 13.395 14.05 13.4825 14.1132 13.5471C14.1763 13.6116 14.2619 13.6479 14.3512 13.6479H16.5236C16.6128 13.6479 16.6985 13.6116 16.7616 13.5471C16.8247 13.4825 16.8602 13.395 16.8602 13.3037C16.8602 13.2124 16.8247 13.1249 16.7616 13.0603C16.6985 12.9958 16.6128 12.9595 16.5236 12.9595H14.6878V11.0827C14.688 11.0373 14.6795 10.9924 14.6626 10.9504C14.6458 10.9085 14.6211 10.8703 14.5898 10.8381C14.5585 10.806 14.5213 10.7805 14.4804 10.763C14.4395 10.7456 14.3955 10.7365 14.3512 10.7365V10.7385Z" />
              </svg>
            )}

            <div className="nav-link-text">{item}</div>
          </div>
        ))}
      </div>
    </nav>
  );
}