import React from 'react'
import RecentPost1 from "./post1.png"
import RecentPost2 from "./post2.png"

const Footer = () => {
    return (
        <div className='px-4 py-8 lg:px-26 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7'>

            <div>
                <div>
                    <svg width="177" height="36" viewBox="0 0 177 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1377_2021)">
                            <path d="M28.6314 27.6956L22.3762 31.8602C21.5608 32.4046 20.6019 32.6951 19.6209 32.6951C18.6399 32.6951 17.6811 32.4046 16.8657 31.8602L10.6 27.6956C10.4192 27.5723 10.2157 27.4859 10.0012 27.4415C9.78667 27.3973 9.56548 27.3958 9.35041 27.4375C9.13536 27.479 8.9307 27.5627 8.74831 27.6838C8.56593 27.8048 8.40943 27.9608 8.2879 28.1428C8.16637 28.3246 8.08222 28.5287 8.04033 28.7432C7.99843 28.9579 7.99962 29.1785 8.04382 29.3926C8.08804 29.6068 8.17438 29.8099 8.29786 29.9905C8.42136 30.1711 8.57952 30.3253 8.76319 30.4444L15.0231 34.609C16.3818 35.516 17.9797 36.0002 19.6146 36.0002C21.2494 36.0002 22.8474 35.516 24.2061 34.609L30.466 30.4444C30.6496 30.3253 30.8079 30.1711 30.9313 29.9905C31.0548 29.8099 31.1412 29.6068 31.1853 29.3926C31.2295 29.1785 31.2308 28.9579 31.1889 28.7432C31.1469 28.5287 31.0627 28.3246 30.9412 28.1428C30.8198 27.9608 30.6633 27.8048 30.4809 27.6838C30.2985 27.5627 30.0939 27.479 29.8788 27.4375C29.6637 27.3958 29.4426 27.3973 29.228 27.4415C29.0135 27.4859 28.8099 27.5723 28.6292 27.6956" fill="#3077B8" />
                            <path d="M39.4804 15.3113V14.203C39.479 13.7658 39.3037 13.3471 38.9934 13.0385C38.6832 12.73 38.2629 12.5567 37.8249 12.5567H29.5469C29.1078 12.5567 28.6867 12.7308 28.3762 13.0406C28.0658 13.3504 27.8913 13.7706 27.8913 14.2087C27.8913 14.6469 28.0658 15.067 28.3762 15.3768C28.6867 15.6867 29.1078 15.8607 29.5469 15.8607H34.0126L20.5323 24.8223C20.2605 25.0038 19.9408 25.1007 19.6138 25.1007C19.2868 25.1007 18.9672 25.0038 18.6954 24.8223L4.79958 15.5774C4.57287 15.4264 4.387 15.222 4.25844 14.9823C4.12989 14.7426 4.06263 14.4749 4.06263 14.203C4.06263 13.931 4.12989 13.6633 4.25844 13.4236C4.387 13.1838 4.57287 12.9795 4.79958 12.8286L18.6966 3.58364C18.9684 3.40211 19.288 3.3052 19.6151 3.3052C19.9421 3.3052 20.2617 3.40211 20.5335 3.58364L28.6302 8.96933C28.8109 9.09556 29.0151 9.1845 29.2308 9.23088C29.4464 9.27728 29.6693 9.28018 29.886 9.23944C30.1027 9.1987 30.3093 9.11516 30.4932 8.99367C30.6772 8.8722 30.8351 8.71525 30.9573 8.53207C31.0797 8.3489 31.1641 8.14316 31.2055 7.92696C31.2471 7.71076 31.245 7.48847 31.1991 7.27313C31.1534 7.05779 31.065 6.85375 30.939 6.67301C30.8131 6.49225 30.6522 6.33844 30.4659 6.2206L22.3692 0.834911C21.5541 0.290581 20.5953 0 19.6144 0C18.6336 0 17.675 0.290581 16.8597 0.834911L2.96272 10.0799C2.28213 10.5321 1.72403 11.1452 1.338 11.8644C0.951984 12.5837 0.75 13.387 0.75 14.203C0.75 15.0189 0.951984 15.8222 1.338 16.5414C1.72403 17.2608 2.28213 17.8737 2.96272 18.3261L16.8597 27.571C17.675 28.1154 18.6336 28.4059 19.6144 28.4059C20.5953 28.4059 21.5541 28.1154 22.3692 27.571L36.1692 18.3906V22.4641C36.1692 22.681 36.2121 22.8958 36.2952 23.0963C36.3784 23.2966 36.5004 23.4789 36.6542 23.6322C36.8079 23.7857 36.9905 23.9073 37.1913 23.9904C37.3922 24.0733 37.6074 24.1161 37.8249 24.1161C38.0423 24.1161 38.2575 24.0733 38.4584 23.9904C38.6592 23.9073 38.8418 23.7857 38.9955 23.6322C39.1493 23.4789 39.2712 23.2966 39.3545 23.0963C39.4375 22.8958 39.4804 22.681 39.4804 22.4641V15.3113Z" fill="#3077B8" />
                            <path d="M66.6752 12.3107L64.38 14.5756C63.7452 13.8542 62.9642 13.2757 62.0883 12.8785C61.2125 12.4813 60.2621 12.2744 59.3 12.2716C58.5176 12.2511 57.7391 12.3887 57.0114 12.6762C56.2836 12.9637 55.6217 13.395 55.0652 13.9443C54.5144 14.4673 54.0783 15.0986 53.7846 15.7984C53.4909 16.4983 53.3459 17.2513 53.3588 18.0098C53.3453 18.7931 53.4959 19.5706 53.8008 20.2925C54.1058 21.0143 54.5585 21.6647 55.1298 22.202C55.7058 22.7659 56.3894 23.2087 57.14 23.5039C57.8907 23.7991 58.6931 23.941 59.4998 23.9207C60.4971 23.9537 61.4838 23.7083 62.3492 23.2123C63.179 22.6738 63.83 21.9016 64.2195 20.9935H59.255V17.9395H67.8689L67.892 18.6595C67.8917 20.1548 67.4898 21.6227 66.7283 22.9105C66.0177 24.1843 64.9764 25.2436 63.7137 25.9772C62.3852 26.7053 60.8871 27.0697 59.3717 27.0335C57.7136 27.064 56.0756 26.6672 54.6161 25.8815C53.2265 25.1149 52.0808 23.9741 51.3096 22.589C50.5047 21.1867 50.0849 19.5971 50.0927 17.981C50.0618 15.8005 50.8653 13.6903 52.3394 12.0803C53.2043 11.1013 54.2759 10.3257 55.4769 9.80922C56.6781 9.29271 57.9791 9.04817 59.2862 9.09314C60.7209 9.08217 62.1429 9.36282 63.4656 9.91799C64.6937 10.4806 65.7887 11.296 66.6786 12.3107" fill="#3077B8" />
                            <path d="M69.4466 13.7188H72.17V15.3097C72.422 14.7344 72.8288 14.2399 73.3454 13.8813C73.8198 13.5595 74.381 13.3888 74.9547 13.3916C75.4044 13.401 75.8462 13.5121 76.2467 13.7165L75.2573 16.4456C74.9741 16.2851 74.6585 16.1899 74.3336 16.1668C74.0628 16.1873 73.8033 16.283 73.5842 16.4431C73.365 16.6031 73.1951 16.8211 73.0937 17.0723C72.6671 18.206 72.4946 19.4191 72.588 20.6263L72.5994 21.2414V26.3519H69.4454L69.4466 13.7188Z" fill="#3077B8" />
                            <path d="M87.5105 13.9702H90.6866V26.6079H87.5094V25.2715C86.9699 25.8036 86.3376 26.233 85.6437 26.5387C85.0002 26.8018 84.3105 26.9343 83.6151 26.9281C82.8131 26.9311 82.0196 26.7634 81.2877 26.436C80.5559 26.1085 79.9025 25.6291 79.3712 25.0296C78.1725 23.7529 77.5287 22.0549 77.5805 20.3062C77.5112 18.5434 78.1323 16.8229 79.3122 15.5092C79.8372 14.9135 80.4851 14.4379 81.2115 14.1152C81.9378 13.7925 82.7255 13.6302 83.5205 13.6395C84.2556 13.6348 84.9839 13.781 85.6598 14.0692C86.3537 14.3752 86.9811 14.813 87.507 15.3583L87.5105 13.9702ZM84.1694 16.5714C83.7108 16.5598 83.2551 16.6462 82.8329 16.8252C82.4108 17.004 82.0319 17.271 81.7217 17.6082C81.0885 18.3592 80.7428 19.3101 80.7459 20.2915C80.7491 21.2731 81.101 22.2216 81.7391 22.9686C82.0469 23.3085 82.424 23.5786 82.8452 23.7609C83.2664 23.943 83.7219 24.0331 84.1809 24.025C84.6446 24.0375 85.1057 23.9515 85.5336 23.7727C85.9616 23.5941 86.3466 23.3266 86.6631 22.9882C87.3389 22.2457 87.6933 21.2668 87.6491 20.2648C87.6704 19.7764 87.5942 19.2888 87.425 18.8302C87.2558 18.3715 86.9967 17.9511 86.6631 17.5932C86.3424 17.2581 85.9547 16.9939 85.5251 16.818C85.0955 16.6419 84.6336 16.5579 84.1694 16.5714Z" fill="#3077B8" />
                            <path d="M103.251 9.0918H106.428V26.6024H103.251V25.2719C102.711 25.804 102.079 26.2334 101.385 26.5391C100.741 26.8024 100.052 26.9347 99.3564 26.9285C98.5543 26.9315 97.7608 26.7638 97.029 26.4364C96.297 26.1091 95.6436 25.6295 95.1123 25.03C93.9138 23.7533 93.27 22.0553 93.3216 20.3066C93.2523 18.5438 93.8733 16.8233 95.0535 15.5096C95.5783 14.9138 96.2263 14.4382 96.9526 14.1155C97.6789 13.7928 98.4666 13.6306 99.2617 13.64C99.9969 13.6352 100.725 13.7815 101.401 14.0697C102.095 14.3756 102.722 14.8135 103.248 15.3587L103.251 9.0918ZM99.9094 16.5718C99.4509 16.5602 98.9952 16.6466 98.5729 16.8256C98.1508 17.0044 97.7718 17.2714 97.4617 17.6087C96.8286 18.3598 96.4827 19.3105 96.486 20.2921C96.4891 21.2735 96.841 22.2221 97.4791 22.969C97.7869 23.3089 98.164 23.579 98.5852 23.7613C99.0064 23.9435 99.462 24.0335 99.921 24.0254C100.385 24.0379 100.846 23.9519 101.274 23.7733C101.702 23.5945 102.087 23.327 102.403 22.9886C103.079 22.2461 103.433 21.2672 103.389 20.2652C103.41 19.777 103.334 19.2893 103.165 18.8306C102.996 18.3721 102.737 17.9515 102.403 17.5937C102.082 17.2585 101.695 16.9943 101.265 16.8184C100.836 16.6423 100.374 16.5583 99.9094 16.5718Z" fill="#3077B8" />
                            <path d="M117.392 15.736L115.429 17.6944C114.883 17.0345 114.103 16.6103 113.252 16.5101C112.955 16.4941 112.66 16.5749 112.413 16.7405C112.321 16.8025 112.244 16.8863 112.192 16.9846C112.139 17.0828 112.111 17.1925 112.111 17.3039C112.113 17.4791 112.181 17.6471 112.303 17.7739C112.586 18.0178 112.907 18.2156 113.252 18.3604L114.415 18.9364C115.388 19.3484 116.253 19.9793 116.942 20.7796C117.471 21.5419 117.707 22.4693 117.605 23.3912C117.503 24.3131 117.071 25.1674 116.388 25.7966C115.466 26.5823 114.276 26.9855 113.065 26.9233C112.207 26.9488 111.356 26.7653 110.585 26.389C109.815 26.0126 109.148 25.4546 108.642 24.7633L110.597 22.6378C110.964 23.0671 111.408 23.4238 111.907 23.6896C112.311 23.9291 112.769 24.0667 113.239 24.0905C113.601 24.1081 113.958 24.0016 114.251 23.7886C114.365 23.7116 114.46 23.6089 114.526 23.4887C114.593 23.3687 114.631 23.2346 114.636 23.0974C114.636 22.6097 114.174 22.1336 113.25 21.6689L112.18 21.1343C110.132 20.1044 109.108 18.8153 109.107 17.267C109.103 16.7822 109.203 16.3024 109.403 15.8602C109.602 15.4181 109.895 15.0244 110.261 14.7061C111.074 13.9821 112.136 13.6009 113.224 13.6428C114.035 13.6388 114.834 13.8261 115.559 14.1895C116.283 14.5529 116.91 15.082 117.391 15.7337" fill="#3077B8" />
                            <path d="M140.616 12.3097L138.321 14.5745C137.686 13.8531 136.905 13.2745 136.029 12.8773C135.153 12.4801 134.203 12.2732 133.241 12.2705C132.458 12.25 131.68 12.3877 130.952 12.6751C130.224 12.9626 129.562 13.3939 129.006 13.9432C128.455 14.4662 128.019 15.0976 127.725 15.7973C127.431 16.4971 127.287 17.2501 127.299 18.0086C127.286 18.7922 127.436 19.5698 127.741 20.2919C128.046 21.014 128.499 21.6647 129.07 22.202C129.646 22.7672 130.329 23.2114 131.079 23.5081C131.83 23.8046 132.632 23.9479 133.439 23.929C134.437 23.9618 135.423 23.7164 136.289 23.2204C137.118 22.6819 137.769 21.9097 138.159 21.0016H133.194V17.9384H141.808L141.831 18.6584C141.831 20.1538 141.429 21.6215 140.668 22.9094C139.957 24.1832 138.916 25.2425 137.653 25.976C136.325 26.7041 134.826 27.0686 133.311 27.0325C131.653 27.0629 130.015 26.6662 128.556 25.8805C127.166 25.1138 126.02 23.9729 125.249 22.588C124.444 21.1855 124.024 19.5959 124.032 17.9798C124.001 15.7994 124.805 13.6892 126.279 12.0793C127.143 11.1019 128.213 10.3275 129.413 9.81141C130.612 9.29535 131.911 9.05049 133.216 9.09436C134.651 9.08341 136.073 9.36406 137.396 9.91921C138.624 10.4818 139.719 11.2972 140.609 12.312" fill="#3077B8" />
                            <path d="M145.72 8.76674C145.988 8.76356 146.253 8.81564 146.5 8.91972C146.747 9.02381 146.969 9.17763 147.153 9.37155C147.347 9.56226 147.5 9.79029 147.603 10.0418C147.705 10.2933 147.756 10.563 147.751 10.8346C147.756 11.1031 147.705 11.3696 147.604 11.6182C147.502 11.8667 147.35 12.092 147.159 12.2804C146.977 12.4721 146.757 12.6242 146.513 12.7271C146.269 12.83 146.007 12.8815 145.742 12.8783C145.472 12.8823 145.204 12.8302 144.955 12.7253C144.706 12.6204 144.482 12.4649 144.297 12.2689C144.102 12.0749 143.949 11.8438 143.847 11.5895C143.744 11.3351 143.693 11.0627 143.699 10.7885C143.698 10.2533 143.91 9.73977 144.289 9.36068C144.668 8.98158 145.182 8.76795 145.718 8.76674H145.72ZM144.129 13.9704H147.308V26.6081H144.129V13.9704Z" fill="#3077B8" />
                            <path d="M148.84 13.9702H152.073L155.271 21.4272L158.465 13.9702H161.685L156.296 26.6079H154.235L148.84 13.9702Z" fill="#3077B8" />
                            <path d="M176.235 21.2073H166.026C166.138 22.0434 166.56 22.8073 167.208 23.35C167.902 23.899 168.771 24.1815 169.657 24.1461C170.224 24.1543 170.788 24.0486 171.315 23.835C171.84 23.6215 172.318 23.3046 172.719 22.903L175.396 24.1576C174.79 25.0497 173.964 25.7716 172.998 26.2543C171.958 26.7301 170.824 26.9626 169.681 26.934C168.787 26.9679 167.896 26.8191 167.062 26.4966C166.228 26.1739 165.469 25.6846 164.832 25.0585C164.215 24.4441 163.731 23.7105 163.41 22.9026C163.087 22.0947 162.934 21.2298 162.958 20.3605C162.93 19.4763 163.078 18.5952 163.398 17.7697C163.717 16.9443 164.199 16.1913 164.817 15.5556C165.421 14.93 166.15 14.4371 166.957 14.1083C167.764 13.7794 168.63 13.6218 169.501 13.6455C170.401 13.6108 171.297 13.7626 172.135 14.0913C172.972 14.4201 173.733 14.9187 174.367 15.5556C175.002 16.2289 175.495 17.0226 175.816 17.8896C176.139 18.7564 176.283 19.6789 176.241 20.6025L176.235 21.2073ZM173.058 18.712C172.852 18.0142 172.414 17.4076 171.814 16.9932C171.187 16.5487 170.433 16.3165 169.663 16.3308C168.826 16.3158 168.006 16.5769 167.332 17.0739C166.815 17.5161 166.414 18.0787 166.165 18.712H173.058Z" fill="#3077B8" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1377_2021">
                                <rect width="177" height="36" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <p className='mt-6 leading-8'>Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Integer gravida vitae ultrices urna et porttitor malesuada.</p>
            </div>

            <div>
                <p className='font-bold leading-6 mb-6'>Get in Touch</p>
                <div className='flex items-center'>
                    <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_958_704)">
                                <path d="M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z" stroke="#6F4025" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M17.657 16.6582L13.414 20.9012C13.039 21.2758 12.5306 21.4862 12.0005 21.4862C11.4704 21.4862 10.962 21.2758 10.587 20.9012L6.343 16.6582C5.22422 15.5393 4.46234 14.1139 4.15369 12.562C3.84504 11.0102 4.00349 9.40169 4.60901 7.9399C5.21452 6.47812 6.2399 5.22871 7.55548 4.34968C8.87107 3.47065 10.4178 3.00146 12 3.00146C13.5822 3.00146 15.1289 3.47065 16.4445 4.34968C17.7601 5.22871 18.7855 6.47812 19.391 7.9399C19.9965 9.40169 20.155 11.0102 19.8463 12.562C19.5377 14.1139 18.7758 15.5393 17.657 16.6582V16.6582Z" stroke="#6F4025" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_958_704">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <p className='leading-8 ml-5'>8819 Ohio St. South Gate,CA 90280</p>
                </div>

                <div className='flex items-center mt-6'>
                    <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_958_710)">
                                <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="#6F4025" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M3 7L12 13L21 7" stroke="#6F4025" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_958_710">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <p className='leading-8 ml-5'>hello@grads give.com</p>
                </div>

                <div className='flex items-center mt-6'>
                    <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_958_716)">
                                <path d="M5 4H9L11 9L8.5 10.5C9.57096 12.6715 11.3285 14.429 13.5 15.5L15 13L20 15V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21C14.0993 20.763 10.4202 19.1065 7.65683 16.3432C4.8935 13.5798 3.23705 9.90074 3 6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4" stroke="#6F4025" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_958_716">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <p className='leading-8 ml-5'>+1 386-688-3295</p>
                </div>
            </div>

            <div>
                <p className='font-bold leading-6 mb-6'>Recent Post</p>
                <div className='flex'>
                    <div className='w-12 h-12 shrink-0'>
                        <img src={RecentPost1} className="w-full h-full" />
                    </div>
                    <p className='leading-8 ml-4'>The EU needs to hold the financial sector in global deforestation</p>
                </div>
                <div className='flex mt-6'>
                    <div className='w-12 h-12 shrink-0'>
                        <img src={RecentPost2} className="w-full h-full" />
                    </div>
                    <p className='leading-8 ml-4'>The EU needs to hold the financial sector in global deforestation</p>
                </div>
            </div>

            <div>
                <p className='font-bold leading-6 mb-6'>Join a Newsletter</p>
                <div className='mt-6'>
                    <p className='text-xs leading-6 text-mutedTextColor'>Your Email</p>
                    <input type="text" className='w-full h-12 border-1 mt-2 focus:outline-none px-4 rounded-lg' placeholder='Enter Your Email' />
                </div>

                <button className='w-full h-12 bg-primaryColor flex justify-center items-center rounded-lg mt-4'>
                    <p className='text-sm font-semibold leading-6'>Subscribe</p>
                </button>
            </div>
        </div>
    )
}

export default Footer