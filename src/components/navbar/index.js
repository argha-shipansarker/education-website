import React from 'react'

const Navbar = () => {
    const navbarMenus = [
        {
            name: "Home"
        },
        {
            name: "Mission"
        },
        {
            name: "Goals"
        },
        {
            name: "FAQs"
        },
        {
            name: "Contact Us"
        },
        {
            name: "Login"
        },
    ]
    return (
        <div className='w-full h-24 px-26 py-4 bg-navbarBackground backdrop-blur-xs flex justify-between items-center fixed top-0 right-0 z-50'>

            <div className='company-logo'>
                <svg width="156" height="32" viewBox="0 0 156 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1396_490)">
                        <path d="M24.7281 24.6182L19.18 28.32C18.4568 28.8038 17.6062 29.062 16.7361 29.062C15.866 29.062 15.0155 28.8038 14.2923 28.32L8.73498 24.6182C8.57461 24.5085 8.39406 24.4317 8.2038 24.3923C8.01354 24.3529 7.81735 24.3516 7.6266 24.3886C7.43585 24.4255 7.25433 24.5 7.09257 24.6076C6.9308 24.7152 6.792 24.8539 6.6842 25.0155C6.57641 25.1772 6.50177 25.3586 6.46461 25.5493C6.42745 25.74 6.4285 25.9362 6.46771 26.1265C6.50692 26.3168 6.58351 26.4975 6.69304 26.6579C6.80256 26.8184 6.94285 26.9556 7.10576 27.0615L12.658 30.7633C13.8631 31.5696 15.2805 32 16.7305 32C18.1805 32 19.5979 31.5696 20.803 30.7633L26.3553 27.0615C26.5182 26.9556 26.6585 26.8184 26.768 26.6579C26.8775 26.4975 26.9541 26.3168 26.9933 26.1265C27.0325 25.9362 27.0336 25.74 26.9964 25.5493C26.9592 25.3586 26.8846 25.1772 26.7768 25.0155C26.669 24.8539 26.5302 24.7152 26.3684 24.6076C26.2067 24.5 26.0252 24.4255 25.8344 24.3886C25.6437 24.3516 25.4475 24.3529 25.2572 24.3923C25.067 24.4317 24.8864 24.5085 24.726 24.6182" fill="white" />
                        <path d="M34.3523 13.61V12.6248C34.3509 12.2363 34.1956 11.8641 33.9204 11.5898C33.6451 11.3155 33.2724 11.1615 32.8838 11.1615H25.5416C25.1522 11.1615 24.7787 11.3162 24.5033 11.5916C24.2279 11.867 24.0732 12.2405 24.0732 12.63C24.0732 13.0194 24.2279 13.3929 24.5033 13.6683C24.7787 13.9437 25.1522 14.0984 25.5416 14.0984H29.5025L17.5461 22.0642C17.3051 22.2256 17.0216 22.3117 16.7315 22.3117C16.4414 22.3117 16.1579 22.2256 15.9169 22.0642L3.59181 13.8465C3.39073 13.7124 3.22587 13.5307 3.11184 13.3176C2.99782 13.1045 2.93816 12.8665 2.93816 12.6248C2.93816 12.3832 2.99782 12.1452 3.11184 11.9321C3.22587 11.719 3.39073 11.5373 3.59181 11.4032L15.9179 3.18545C16.1589 3.02409 16.4425 2.93795 16.7325 2.93795C17.0226 2.93795 17.3061 3.02409 17.5471 3.18545L24.7286 7.97273C24.8889 8.08495 25.07 8.164 25.2613 8.20523C25.4525 8.24646 25.6501 8.24905 25.8424 8.21284C26.0347 8.17663 26.2178 8.10236 26.381 7.99438C26.5442 7.8864 26.6842 7.7469 26.7927 7.58407C26.9012 7.42124 26.976 7.23836 27.0129 7.04619C27.0497 6.85401 27.0478 6.65641 27.0072 6.465C26.9665 6.27359 26.8881 6.09222 26.7764 5.93156C26.6647 5.77089 26.522 5.63417 26.3568 5.52943L19.1753 0.742143C18.4523 0.258295 17.602 0 16.732 0C15.8621 0 15.0117 0.258295 14.2887 0.742143L1.9626 8.95989C1.35893 9.3619 0.86392 9.90679 0.521535 10.5462C0.179151 11.1855 0 11.8996 0 12.6248C0 13.3501 0.179151 14.0642 0.521535 14.7035C0.86392 15.3429 1.35893 15.8878 1.9626 16.2898L14.2887 24.5076C15.0117 24.9914 15.8621 25.2497 16.732 25.2497C17.602 25.2497 18.4523 24.9914 19.1753 24.5076L31.4154 16.3472V19.9681C31.4154 20.1609 31.4534 20.3519 31.5272 20.53C31.601 20.7082 31.7091 20.8701 31.8455 21.0064C31.9819 21.1428 32.1437 21.2509 32.3219 21.3247C32.5001 21.3985 32.691 21.4365 32.8838 21.4365C33.0767 21.4365 33.2676 21.3985 33.4458 21.3247C33.6239 21.2509 33.7858 21.1428 33.9222 21.0064C34.0585 20.8701 34.1667 20.7082 34.2405 20.53C34.3143 20.3519 34.3523 20.1609 34.3523 19.9681V13.61Z" fill="white" />
                        <path d="M58.4724 10.9424L56.4367 12.9556C55.8737 12.3144 55.1809 11.8002 54.4041 11.4471C53.6273 11.094 52.7842 10.9101 51.931 10.9076C51.237 10.8894 50.5465 11.0117 49.901 11.2672C49.2555 11.5228 48.6684 11.9062 48.1749 12.3944C47.6863 12.8593 47.2996 13.4205 47.0391 14.0426C46.7786 14.6646 46.6499 15.3339 46.6614 16.0082C46.6494 16.7045 46.7829 17.3956 47.0534 18.0373C47.3239 18.6789 47.7254 19.2571 48.2322 19.7346C48.743 20.2359 49.3493 20.6294 50.0151 20.8918C50.6809 21.1543 51.3927 21.2803 52.1081 21.2624C52.9927 21.2917 53.868 21.0736 54.6354 20.6327C55.3714 20.154 55.9488 19.4676 56.2943 18.6604H51.891V15.9457H59.5312L59.5517 16.5858C59.5514 17.9149 59.195 19.2197 58.5195 20.3644C57.8892 21.4966 56.9657 22.4383 55.8458 23.0903C54.6673 23.7375 53.3386 24.0615 51.9945 24.0293C50.5238 24.0564 49.071 23.7037 47.7765 23.0053C46.544 22.3239 45.5278 21.3098 44.8437 20.0787C44.1298 18.8321 43.7575 17.4191 43.7644 15.9826C43.7371 14.0444 44.4497 12.1687 45.7572 10.7376C46.5243 9.86738 47.4747 9.17794 48.5401 8.71883C49.6055 8.25971 50.7593 8.04233 51.9187 8.0823C53.1913 8.07256 54.4526 8.32203 55.6256 8.8155C56.7149 9.31559 57.6861 10.0404 58.4755 10.9424" fill="white" />
                        <path d="M60.9307 12.1948H63.3464V13.609C63.5698 13.0975 63.9307 12.658 64.3888 12.3392C64.8097 12.0531 65.3074 11.9014 65.8163 11.904C66.2152 11.9123 66.607 12.011 66.9622 12.1927L66.0846 14.6186C65.8334 14.476 65.5535 14.3913 65.2654 14.3708C65.0252 14.3891 64.795 14.4741 64.6007 14.6164C64.4063 14.7586 64.2556 14.9523 64.1656 15.1757C63.7873 16.1834 63.6342 17.2617 63.7171 18.3348L63.7273 18.8816V23.4242H60.9297L60.9307 12.1948Z" fill="white" />
                        <path d="M76.9548 12.418H79.7719V23.6515H76.9538V22.4636C76.4753 22.9366 75.9145 23.3184 75.299 23.59C74.7282 23.824 74.1165 23.9417 73.4998 23.9362C72.7884 23.9389 72.0846 23.7898 71.4354 23.4987C70.7863 23.2077 70.2067 22.7815 69.7355 22.2486C68.6723 21.1138 68.1014 19.6044 68.1472 18.0501C68.0858 16.4832 68.6367 14.9539 69.6832 13.7861C70.1489 13.2565 70.7235 12.8338 71.3678 12.5469C72.012 12.2601 72.7106 12.1158 73.4158 12.1241C74.0678 12.1199 74.7137 12.2499 75.3133 12.5061C75.9287 12.778 76.4852 13.1672 76.9517 13.6519L76.9548 12.418ZM73.9913 14.7302C73.5846 14.7199 73.1804 14.7968 72.8059 14.9557C72.4315 15.1147 72.0954 15.3521 71.8204 15.6518C71.2587 16.3194 70.952 17.1646 70.9548 18.037C70.9576 18.9095 71.2698 19.7526 71.8357 20.4166C72.1087 20.7187 72.4433 20.9588 72.8169 21.1208C73.1904 21.2828 73.5944 21.3629 74.0015 21.3556C74.4128 21.3667 74.8218 21.2903 75.2014 21.1314C75.581 20.9726 75.9224 20.7348 76.2032 20.434C76.8026 19.774 77.1169 18.9039 77.0777 18.0132C77.0966 17.5792 77.029 17.1457 76.8789 16.7381C76.7288 16.3304 76.4991 15.9566 76.2032 15.6385C75.9187 15.3406 75.5748 15.1058 75.1937 14.9494C74.8127 14.7929 74.403 14.7182 73.9913 14.7302Z" fill="white" />
                        <path d="M90.9128 8.08128H93.7309V23.6464H90.9128V22.4636C90.4343 22.9366 89.8735 23.3184 89.258 23.59C88.6872 23.824 88.0756 23.9417 87.4588 23.9362C86.7474 23.9389 86.0436 23.7898 85.3944 23.4987C84.7453 23.2077 84.1657 22.7815 83.6945 22.2486C82.6314 21.1138 82.0604 19.6044 82.1062 18.0501C82.0447 16.4832 82.5956 14.9538 83.6422 13.7861C84.1079 13.2564 84.6825 12.8337 85.3267 12.5468C85.971 12.26 86.6696 12.1158 87.3748 12.1241C88.0268 12.1199 88.6727 12.2499 89.2723 12.5061C89.8877 12.778 90.4442 13.1672 90.9107 13.6519L90.9128 8.08128ZM87.9493 14.7302C87.5426 14.7199 87.1384 14.7968 86.7639 14.9557C86.3895 15.1147 86.0534 15.3521 85.7783 15.6518C85.2167 16.3194 84.91 17.1646 84.9128 18.037C84.9156 18.9095 85.2278 19.7526 85.7937 20.4166C86.0667 20.7187 86.4013 20.9588 86.7749 21.1208C87.1484 21.2828 87.5524 21.3629 87.9595 21.3556C88.3708 21.3667 88.7798 21.2903 89.1594 21.1314C89.539 20.9726 89.8804 20.7348 90.1612 20.434C90.7606 19.774 91.0749 18.9039 91.0357 18.0132C91.0546 17.5792 90.987 17.1457 90.8369 16.7381C90.6868 16.3304 90.4571 15.9566 90.1612 15.6385C89.8767 15.3406 89.5328 15.1058 89.1517 14.9494C88.7707 14.7929 88.361 14.7182 87.9493 14.7302Z" fill="white" />
                        <path d="M103.456 13.9878L101.716 15.7286C101.231 15.1421 100.54 14.765 99.7842 14.676C99.5207 14.6616 99.2598 14.7335 99.0408 14.8808C98.9584 14.9358 98.8909 15.0103 98.8441 15.0976C98.7973 15.185 98.7727 15.2824 98.7725 15.3815C98.7741 15.5373 98.8349 15.6866 98.9425 15.7993C99.1941 16.016 99.4781 16.1919 99.7842 16.3205L100.816 16.8325C101.679 17.1989 102.446 17.7596 103.057 18.471C103.527 19.1485 103.736 19.973 103.645 20.7925C103.555 21.6119 103.172 22.3712 102.566 22.9306C101.748 23.629 100.693 23.9874 99.6183 23.9321C98.8576 23.9547 98.1029 23.7917 97.4194 23.4572C96.7358 23.1226 96.1441 22.6266 95.6953 22.012L97.43 20.1227C97.7552 20.5043 98.1491 20.8214 98.5912 21.0576C98.9504 21.2706 99.356 21.3929 99.7729 21.414C100.094 21.4297 100.411 21.335 100.671 21.1457C100.772 21.0772 100.856 20.9859 100.915 20.8792C100.974 20.7724 101.007 20.6533 101.012 20.5313C101.012 20.0978 100.602 19.6745 99.7832 19.2615L98.8339 18.7864C97.0173 17.8709 96.1087 16.725 96.108 15.3487C96.1041 14.9178 96.1936 14.4912 96.3704 14.0982C96.5471 13.7053 96.807 13.3553 97.132 13.0723C97.8524 12.4288 98.7944 12.09 99.7596 12.1272C100.479 12.1236 101.188 12.2902 101.83 12.6132C102.473 12.9362 103.029 13.4065 103.455 13.9858" fill="white" />
                        <path d="M124.055 10.9424L122.02 12.9556C121.457 12.3143 120.764 11.8001 119.987 11.447C119.21 11.0939 118.367 10.91 117.514 10.9076C116.82 10.8894 116.13 11.0117 115.484 11.2672C114.839 11.5228 114.251 11.9062 113.758 12.3944C113.269 12.8593 112.883 13.4205 112.622 14.0426C112.362 14.6646 112.233 15.3339 112.244 16.0082C112.232 16.7046 112.366 17.3959 112.636 18.0378C112.907 18.6797 113.308 19.258 113.815 19.7356C114.325 20.238 114.931 20.6328 115.597 20.8965C116.263 21.1602 116.974 21.2874 117.69 21.2706C118.575 21.2999 119.45 21.0818 120.217 20.6409C120.953 20.1622 121.531 19.4758 121.876 18.6686H117.473V15.9457H125.113L125.134 16.5857C125.133 17.9149 124.777 19.2197 124.102 20.3644C123.471 21.4966 122.548 22.4382 121.428 23.0903C120.249 23.7375 118.921 24.0615 117.577 24.0293C116.106 24.0564 114.653 23.7037 113.359 23.0053C112.126 22.3239 111.11 21.3098 110.426 20.0787C109.712 18.8321 109.34 17.4191 109.346 15.9826C109.319 14.0444 110.032 12.1687 111.339 10.7376C112.106 9.86884 113.055 9.18043 114.119 8.72171C115.183 8.263 116.335 8.04535 117.493 8.08435C118.765 8.07461 120.026 8.32407 121.199 8.81755C122.289 9.31763 123.26 10.0425 124.049 10.9444" fill="white" />
                        <path d="M128.582 7.7925C128.82 7.78967 129.055 7.83597 129.274 7.92849C129.493 8.02101 129.69 8.15774 129.853 8.33011C130.025 8.49964 130.161 8.70233 130.252 8.92589C130.343 9.14945 130.388 9.38921 130.384 9.63062C130.388 9.86924 130.343 10.1062 130.253 10.3271C130.163 10.548 130.028 10.7483 129.858 10.9158C129.697 11.0862 129.502 11.2214 129.286 11.3128C129.069 11.4043 128.837 11.45 128.602 11.4472C128.362 11.4508 128.125 11.4045 127.904 11.3112C127.683 11.2179 127.484 11.0798 127.32 10.9055C127.148 10.7331 127.012 10.5277 126.921 10.3016C126.829 10.0755 126.785 9.83338 126.789 9.58966C126.789 9.11392 126.977 8.65742 127.313 8.32045C127.649 7.98348 128.105 7.79359 128.58 7.7925H128.582ZM127.171 12.418H129.99V23.6515H127.171V12.418Z" fill="white" />
                        <path d="M131.35 12.418H134.217L137.054 19.0465L139.886 12.418H142.743L137.963 23.6515H136.135L131.35 12.418Z" fill="white" />
                        <path d="M155.649 18.8509H146.595C146.695 19.594 147.069 20.2732 147.643 20.7556C148.259 21.2436 149.03 21.4946 149.816 21.4631C150.319 21.4705 150.819 21.3764 151.286 21.1866C151.752 20.9968 152.176 20.7151 152.531 20.3582L154.906 21.4734C154.368 22.2663 153.636 22.908 152.779 23.3371C151.857 23.76 150.851 23.9667 149.837 23.9413C149.044 23.9714 148.254 23.8391 147.514 23.5524C146.775 23.2657 146.102 22.8307 145.536 22.2742C144.989 21.728 144.56 21.0759 144.274 20.3578C143.988 19.6397 143.852 18.8708 143.874 18.0982C143.849 17.3122 143.981 16.529 144.264 15.7953C144.547 15.0615 144.975 14.3922 145.522 13.827C146.059 13.271 146.705 12.8329 147.421 12.5406C148.136 12.2483 148.905 12.1082 149.677 12.1292C150.475 12.0984 151.271 12.2333 152.014 12.5256C152.756 12.8178 153.431 13.261 153.994 13.827C154.557 14.4257 154.994 15.1312 155.279 15.9017C155.565 16.6723 155.693 17.4923 155.656 18.3133L155.649 18.8509ZM152.831 16.6329C152.649 16.0126 152.261 15.4734 151.729 15.105C151.173 14.7099 150.504 14.5035 149.822 14.5162C149.078 14.5028 148.351 14.735 147.753 15.1767C147.294 15.5698 146.939 16.0699 146.719 16.6329H152.831Z" fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1396_490">
                            <rect width="156" height="32" fill="white" />
                        </clipPath>
                    </defs>
                </svg>


            </div>

            <div className='navbar-menus flex'>
                {
                    navbarMenus.map((menu, index) => (
                        <div className={`${navbarMenus.length - 1 === index ? "" : "mr-12"}`} key={index}>
                            <p className='font-semibold text-white'>{menu.name}</p>
                            {
                                menu.name === "Home" && <div className='h-1 bg-primaryColor mt-1'></div>
                            }
                        </div>
                    ))
                }
            </div>

            <button className='w-35 h-12 bg-primaryColor flex items-center justify-center rounded-lg font-semibold text-sm'>
                DONATE NOW
            </button>
        </div>
    )
}

export default Navbar