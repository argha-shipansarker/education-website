import React from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import ModalPhoto from "./Photo.png"
import { Link } from 'react-router-dom';

const ThankYouModal = ({ open, onCloseModal }) => {
    return (
        // <div>
        <Modal open={open} onClose={onCloseModal} center blockScroll={false} showCloseIcon={false}>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='p-10'>
                    <div className='flex justify-center'>
                        <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1377_2499)">
                                <path d="M75 150C116.421 150 150 116.421 150 75C150 33.5786 116.421 0 75 0C33.5786 0 0 33.5786 0 75C0 116.421 33.5786 150 75 150Z" fill="#3077B8" />
                                <path d="M82.012 69.0407L76.594 72.6557C75.8877 73.1282 75.0572 73.3804 74.2075 73.3804C73.3578 73.3804 72.5272 73.1282 71.821 72.6557L66.394 69.0407C66.2374 68.9336 66.0611 68.8586 65.8753 68.8202C65.6895 68.7817 65.4979 68.7804 65.3116 68.8165C65.1253 68.8526 64.9481 68.9253 64.7901 69.0304C64.6321 69.1355 64.4966 69.2709 64.3913 69.4288C64.286 69.5867 64.2132 69.7638 64.1769 69.9501C64.1406 70.1363 64.1416 70.3279 64.1799 70.5137C64.2182 70.6996 64.293 70.876 64.3999 71.0327C64.5069 71.1894 64.6439 71.3233 64.803 71.4267L70.225 75.0417C71.4019 75.8291 72.786 76.2495 74.202 76.2495C75.618 76.2495 77.0021 75.8291 78.179 75.0417L83.601 71.4267C83.7601 71.3233 83.8971 71.1894 84.004 71.0327C84.111 70.876 84.1858 70.6996 84.2241 70.5137C84.2624 70.3279 84.2634 70.1363 84.2271 69.9501C84.1908 69.7638 84.1179 69.5867 84.0127 69.4288C83.9074 69.2709 83.7718 69.1355 83.6139 69.0304C83.4559 68.9253 83.2786 68.8526 83.0924 68.8165C82.9061 68.7804 82.7145 68.7817 82.5287 68.8202C82.3429 68.8586 82.1666 68.9336 82.01 69.0407" fill="white" />
                                <path d="M91.4098 58.2907V57.3287C91.4085 56.9493 91.2569 56.5858 90.9881 56.318C90.7193 56.0501 90.3553 55.8997 89.9758 55.8997H82.8058C82.4255 55.8997 82.0608 56.0508 81.7919 56.3197C81.5229 56.5887 81.3718 56.9534 81.3718 57.3337C81.3718 57.7141 81.5229 58.0788 81.7919 58.3477C82.0608 58.6167 82.4255 58.7677 82.8058 58.7677H86.6738L74.9978 66.5467C74.7625 66.7043 74.4856 66.7884 74.2023 66.7884C73.9191 66.7884 73.6422 66.7043 73.4068 66.5467L61.3708 58.5217C61.1745 58.3908 61.0135 58.2134 60.9021 58.0053C60.7908 57.7971 60.7325 57.5648 60.7325 57.3287C60.7325 57.0927 60.7908 56.8603 60.9021 56.6522C61.0135 56.4441 61.1745 56.2667 61.3708 56.1357L73.4078 48.1107C73.6432 47.9532 73.9201 47.869 74.2033 47.869C74.4866 47.869 74.7635 47.9532 74.9988 48.1107L82.0118 52.7857C82.1684 52.8953 82.3452 52.9725 82.532 53.0128C82.7188 53.053 82.9118 53.0556 83.0996 53.0202C83.2874 52.9849 83.4662 52.9123 83.6255 52.8069C83.7849 52.7014 83.9216 52.5652 84.0275 52.4062C84.1335 52.2472 84.2066 52.0686 84.2426 51.8809C84.2786 51.6933 84.2767 51.5003 84.237 51.3134C84.1973 51.1264 84.1207 50.9493 84.0117 50.7924C83.9026 50.6355 83.7632 50.502 83.6018 50.3997L76.5888 45.7247C75.8828 45.2522 75.0524 45 74.2028 45C73.3533 45 72.5229 45.2522 71.8168 45.7247L59.7798 53.7497C59.1903 54.1423 58.7069 54.6744 58.3726 55.2988C58.0382 55.9232 57.8633 56.6205 57.8633 57.3287C57.8633 58.037 58.0382 58.7343 58.3726 59.3587C58.7069 59.983 59.1903 60.5152 59.7798 60.9077L71.8168 68.9327C72.5229 69.4052 73.3533 69.6575 74.2028 69.6575C75.0524 69.6575 75.8828 69.4052 76.5888 68.9327L88.5418 60.9637V64.4997C88.5418 64.6881 88.5789 64.8745 88.651 65.0485C88.7231 65.2225 88.8287 65.3806 88.9619 65.5137C89.095 65.6469 89.2531 65.7525 89.4271 65.8246C89.6011 65.8966 89.7875 65.9337 89.9758 65.9337C90.1642 65.9337 90.3506 65.8966 90.5246 65.8246C90.6986 65.7525 90.8567 65.6469 90.9898 65.5137C91.123 65.3806 91.2286 65.2225 91.3007 65.0485C91.3728 64.8745 91.4098 64.6881 91.4098 64.4997V58.2907Z" fill="white" />
                                <path d="M34.3637 91.3256L32.3757 93.2916C31.826 92.6654 31.1494 92.1632 30.3908 91.8184C29.6322 91.4736 28.809 91.294 27.9757 91.2916C27.298 91.2738 26.6237 91.3933 25.9934 91.6428C25.363 91.8923 24.7897 92.2668 24.3077 92.7436C23.8307 93.1976 23.453 93.7456 23.1986 94.353C22.9442 94.9605 22.8186 95.6141 22.8297 96.2726C22.818 96.9525 22.9484 97.6274 23.2125 98.254C23.4767 98.8807 23.8688 99.4452 24.3637 99.9116C24.8626 100.401 25.4546 100.785 26.1048 101.042C26.755 101.298 27.4501 101.421 28.1487 101.404C29.0126 101.432 29.8673 101.219 30.6167 100.789C31.3355 100.321 31.8993 99.6508 32.2367 98.8626H27.9367V96.2116H35.3977L35.4177 96.8366C35.4174 98.1345 35.0694 99.4087 34.4097 100.527C33.7942 101.632 32.8923 102.552 31.7987 103.189C30.6479 103.821 29.3503 104.137 28.0377 104.106C26.6016 104.132 25.1829 103.788 23.9187 103.106C22.7151 102.44 21.7227 101.45 21.0547 100.248C20.3576 99.0302 19.994 97.6504 20.0007 96.2476C19.974 94.3548 20.6699 92.5231 21.9467 91.1256C22.6959 90.2758 23.624 89.6025 24.6644 89.1542C25.7048 88.7058 26.8315 88.4935 27.9637 88.5326C29.2065 88.5231 30.4382 88.7667 31.5837 89.2486C32.6475 89.7369 33.5959 90.4447 34.3667 91.3256" fill="white" />
                                <path d="M36.7647 92.5486H39.1237V93.9296C39.3419 93.4301 39.6943 93.0009 40.1417 92.6896C40.5527 92.4103 41.0387 92.2621 41.5357 92.2646C41.9252 92.2727 42.3078 92.3692 42.6547 92.5466L41.7977 94.9156C41.5524 94.7763 41.279 94.6936 40.9977 94.6736C40.7632 94.6914 40.5383 94.7745 40.3485 94.9134C40.1588 95.0523 40.0116 95.2415 39.9237 95.4596C39.5542 96.4436 39.4047 97.4966 39.4857 98.5446L39.4957 99.0786V103.515H36.7637L36.7647 92.5486Z" fill="white" />
                                <path d="M52.4122 92.7666H55.1632V103.737H52.4112V102.577C51.9439 103.039 51.3963 103.411 50.7952 103.677C50.2378 103.905 49.6405 104.02 49.0382 104.015C48.3435 104.017 47.6562 103.872 47.0223 103.587C46.3883 103.303 45.8224 102.887 45.3622 102.367C44.324 101.258 43.7664 99.7844 43.8112 98.2666C43.7512 96.7364 44.2891 95.243 45.3112 94.1026C45.7659 93.5854 46.3271 93.1726 46.9562 92.8925C47.5853 92.6123 48.2675 92.4715 48.9562 92.4796C49.5929 92.4755 50.2236 92.6024 50.8092 92.8526C51.4101 93.1181 51.9536 93.4982 52.4092 93.9716L52.4122 92.7666ZM49.5182 95.0246C49.121 95.0145 48.7263 95.0896 48.3606 95.2448C47.9949 95.4 47.6667 95.6318 47.3982 95.9246C46.8497 96.5765 46.5502 97.4019 46.5529 98.2538C46.5557 99.1058 46.8605 99.9292 47.4132 100.578C47.6798 100.873 48.0065 101.107 48.3713 101.265C48.7361 101.423 49.1306 101.502 49.5282 101.495C49.9298 101.505 50.3292 101.431 50.6999 101.276C51.0706 101.12 51.404 100.888 51.6782 100.595C52.2635 99.9501 52.5705 99.1004 52.5322 98.2306C52.5507 97.8067 52.4847 97.3834 52.3381 96.9853C52.1914 96.5872 51.9671 96.2222 51.6782 95.9116C51.4004 95.6207 51.0645 95.3914 50.6924 95.2386C50.3203 95.0858 49.9203 95.0129 49.5182 95.0246Z" fill="white" />
                                <path d="M66.043 88.5316H68.795V103.732H66.043V102.577C65.5758 103.038 65.0281 103.411 64.427 103.677C63.8697 103.905 63.2724 104.02 62.67 104.015C61.9753 104.017 61.288 103.872 60.6541 103.587C60.0202 103.303 59.4542 102.887 58.994 102.367C57.9559 101.258 57.3983 99.7844 57.443 98.2666C57.3829 96.7364 57.9209 95.2429 58.943 94.1026C59.3977 93.5853 59.9589 93.1725 60.588 92.8924C61.2171 92.6122 61.8994 92.4714 62.588 92.4796C63.2248 92.4754 63.8555 92.6024 64.441 92.8526C65.042 93.1181 65.5854 93.4982 66.041 93.9716L66.043 88.5316ZM63.149 95.0246C62.7519 95.0145 62.3572 95.0895 61.9915 95.2448C61.6258 95.4 61.2976 95.6318 61.029 95.9246C60.4805 96.5765 60.181 97.4018 60.1838 98.2538C60.1865 99.1058 60.4913 99.9292 61.044 100.578C61.3106 100.873 61.6373 101.107 62.0022 101.265C62.367 101.423 62.7615 101.502 63.159 101.495C63.5607 101.505 63.9601 101.431 64.3308 101.276C64.7014 101.12 65.0349 100.888 65.3091 100.595C65.8944 99.9501 66.2014 99.1004 66.163 98.2306C66.1815 97.8067 66.1155 97.3834 65.9689 96.9853C65.8223 96.5872 65.598 96.2222 65.3091 95.9116C65.0312 95.6207 64.6954 95.3914 64.3233 95.2386C63.9512 95.0858 63.5511 95.0128 63.149 95.0246Z" fill="white" />
                                <path d="M78.2929 94.2996L76.5929 95.9996C76.1201 95.4268 75.4445 95.0585 74.7069 94.9716C74.4496 94.9576 74.1947 95.0278 73.9809 95.1716C73.9005 95.2253 73.8345 95.2981 73.7888 95.3834C73.7431 95.4686 73.7191 95.5638 73.7189 95.6606C73.7205 95.8127 73.7798 95.9585 73.8849 96.0686C74.1306 96.2802 74.4079 96.4519 74.7069 96.5776L75.7149 97.0776C76.5577 97.4353 77.3064 97.9829 77.9029 98.6776C78.3615 99.3393 78.5656 100.144 78.4775 100.945C78.3895 101.745 78.0153 102.486 77.4239 103.033C76.6245 103.715 75.5943 104.065 74.5449 104.011C73.802 104.033 73.065 103.874 72.3975 103.547C71.73 103.22 71.1521 102.736 70.7139 102.136L72.4079 100.291C72.7254 100.663 73.1101 100.973 73.5419 101.204C73.8926 101.412 74.2886 101.531 74.6959 101.552C75.0095 101.567 75.319 101.474 75.5729 101.29C75.6715 101.223 75.7531 101.134 75.8109 101.029C75.8688 100.925 75.9013 100.809 75.9059 100.69C75.9059 100.266 75.5059 99.8529 74.7059 99.4496L73.7789 98.9856C72.0049 98.0916 71.1175 96.9726 71.1169 95.6286C71.113 95.2078 71.2004 94.7912 71.3731 94.4074C71.5457 94.0236 71.7995 93.6818 72.1169 93.4056C72.8204 92.7771 73.7403 92.4462 74.6829 92.4826C75.3849 92.4791 76.0779 92.6417 76.7051 92.9572C77.3323 93.2726 77.876 93.7319 78.2919 94.2976" fill="white" />
                                <path d="M98.4087 91.3256L96.4207 93.2916C95.871 92.6653 95.1944 92.1631 94.4358 91.8183C93.6772 91.4735 92.854 91.2939 92.0207 91.2916C91.343 91.2738 90.6687 91.3933 90.0383 91.6428C89.408 91.8923 88.8346 92.2668 88.3527 92.7436C87.8756 93.1975 87.4979 93.7456 87.2435 94.353C86.9891 94.9605 86.8635 95.6141 86.8747 96.2726C86.8628 96.9527 86.9931 97.6277 87.2573 98.2546C87.5215 98.8814 87.9136 99.4461 88.4087 99.9126C88.9068 100.403 89.4985 100.789 90.1485 101.046C90.7985 101.304 91.4937 101.428 92.1927 101.412C93.0566 101.44 93.9112 101.227 94.6607 100.797C95.3795 100.329 95.9433 99.6588 96.2807 98.8706H91.9807V96.2116H99.4417L99.4617 96.8366C99.4614 98.1345 99.1133 99.4087 98.4537 100.527C97.8382 101.632 96.9363 102.552 95.8427 103.189C94.6919 103.821 93.3943 104.137 92.0817 104.106C90.6456 104.132 89.2268 103.788 87.9627 103.106C86.7591 102.44 85.7667 101.45 85.0987 100.248C84.4015 99.0302 84.038 97.6504 84.0447 96.2476C84.018 94.3548 84.7139 92.5231 85.9907 91.1256C86.7392 90.2772 87.6661 89.6049 88.705 89.157C89.7439 88.709 90.869 88.4965 91.9997 88.5346C93.2425 88.525 94.4741 88.7687 95.6197 89.2506C96.6834 89.7389 97.6319 90.4467 98.4027 91.3276" fill="white" />
                                <path d="M102.828 88.2496C103.06 88.2468 103.29 88.292 103.504 88.3824C103.717 88.4727 103.91 88.6062 104.069 88.7746C104.237 88.9401 104.37 89.1381 104.459 89.3564C104.548 89.5747 104.592 89.8088 104.587 90.0446C104.591 90.2776 104.548 90.509 104.46 90.7247C104.372 90.9404 104.24 91.136 104.074 91.2996C103.917 91.466 103.726 91.598 103.515 91.6873C103.304 91.7766 103.077 91.8213 102.847 91.8186C102.614 91.822 102.381 91.7768 102.166 91.6857C101.95 91.5947 101.756 91.4598 101.595 91.2896C101.427 91.1212 101.295 90.9206 101.206 90.6998C101.117 90.479 101.073 90.2426 101.077 90.0046C101.077 89.54 101.261 89.0942 101.589 88.7651C101.917 88.4361 102.362 88.2506 102.826 88.2496H102.828ZM101.45 92.7666H104.203V103.737H101.45V92.7666Z" fill="white" />
                                <path d="M105.532 92.7666H108.332L111.103 99.2396L113.868 92.7666H116.658L111.99 103.737H110.205L105.532 92.7666Z" fill="white" />
                                <path d="M129.261 99.0486H120.419C120.517 99.7743 120.881 100.437 121.442 100.909C122.044 101.385 122.797 101.63 123.564 101.6C124.056 101.607 124.544 101.515 124.999 101.33C125.455 101.144 125.869 100.869 126.216 100.521L128.535 101.61C128.01 102.384 127.294 103.011 126.458 103.43C125.558 103.843 124.575 104.044 123.585 104.02C122.811 104.049 122.039 103.92 121.317 103.64C120.594 103.36 119.937 102.935 119.385 102.392C118.851 101.858 118.431 101.221 118.152 100.52C117.873 99.8189 117.74 99.068 117.762 98.3136C117.737 97.546 117.866 96.7812 118.143 96.0646C118.419 95.3481 118.837 94.6944 119.371 94.1426C119.895 93.5996 120.527 93.1718 121.225 92.8863C121.924 92.6008 122.674 92.464 123.429 92.4846C124.208 92.4544 124.985 92.5862 125.71 92.8716C126.436 93.157 127.094 93.5897 127.644 94.1426C128.194 94.7272 128.621 95.4161 128.899 96.1686C129.178 96.9211 129.303 97.7219 129.267 98.5236L129.261 99.0486ZM126.509 96.8826C126.331 96.2769 125.951 95.7503 125.433 95.3906C124.889 95.0047 124.236 94.8031 123.57 94.8156C122.844 94.8025 122.134 95.0292 121.55 95.4606C121.102 95.8444 120.755 96.3328 120.54 96.8826H126.509Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1377_2499">
                                    <rect width="150" height="150" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className='p-6 bg-lightBlueSectionBackground mt-8 rounded-xl'>
                        <p className='text-2xl font-bold leading-8 text-center'>Thank You for Your Gift</p>
                        <p className='leading-6 text-center mt-3'>Will you consider making an additional gift of $10 per month to help people affected by disasters big and small?</p>
                    </div>

                    <Link to='/invoice' className='w-full h-14 bg-primaryColor flex justify-center items-center mt-8 rounded-lg' onClick={onCloseModal}>
                        <p className='text-sm font-semibold leading-6'>DONATE $10 MONTHLY</p>
                    </Link>

                    <button className='w-full h-14 border-1 flex justify-center items-center mt-4 rounded-lg' onClick={onCloseModal}>
                        <p className='text-sm font-semibold leading-6'>NO, THANKS</p>
                    </button>
                </div>

                <div style={{ height: 586, width: 512 }}>
                    <img src={ModalPhoto} className="h-full w-full " />
                </div>
            </div>
        </Modal>
        // </div>
    )
}

export default ThankYouModal