import React from 'react'

function Header() {
  return (
    <div>
        <div className='bg-[#fff]'>
            <div className='mx-6 py-1 text-left'>
                <h2>meta</h2>
            </div>
        </div>
        <div className='bg-[#103928]'>
        <div className='mx-6 py-10 px-9 flex items-center text-sm justify-between'>
            <a href="">
                <span>
                  <svg width="200" height="30" viewBox="0 0 200 30" fill="none"><g clip-path="url(#clip0_1312_10284)"><path d="M45.7979 17.5828H45.7606L43.4096 8.10284H40.5778L38.1895 17.468H38.1508L35.9749 8.10284H32.9508L36.5906 21.8599H39.6535L41.9499 12.4962H41.9887L44.3152 21.8599H47.3207L51.0179 8.10284H48.0527L45.7979 17.5828ZM60.2438 12.756C59.9541 12.3875 59.5725 12.1019 59.1372 11.9278C58.5623 11.7107 57.9502 11.6093 57.336 11.6293C56.7865 11.6387 56.2465 11.7737 55.7572 12.024C55.1995 12.3045 54.7375 12.744 54.4296 13.287H54.3707V8.10284H51.6351V21.8599H54.3693V16.6384C54.3693 15.6232 54.5363 14.894 54.8702 14.451C55.2041 14.008 55.7438 13.7865 56.4892 13.7865C57.1437 13.7865 57.5991 13.9893 57.8556 14.395C58.1125 14.7984 58.2416 15.4127 58.2416 16.2336V21.8599H60.9773V15.7327C60.9814 15.1664 60.9266 14.6012 60.8136 14.0463C60.7216 13.5793 60.5269 13.1386 60.2438 12.756ZM71.5135 19.6453V14.4639C71.5135 13.8583 71.3786 13.3746 71.1088 13.0086C70.8384 12.6405 70.4815 12.3448 70.0697 12.1474C69.6254 11.9352 69.1501 11.7952 68.6617 11.7326C68.1576 11.6627 67.6493 11.6272 67.1403 11.6264C66.5875 11.6265 66.0361 11.6813 65.494 11.79C64.9752 11.8889 64.4769 12.0748 64.02 12.3397C63.5873 12.5928 63.2185 12.942 62.9421 13.3602C62.6402 13.844 62.4745 14.4004 62.4628 14.9706H65.1898C65.2414 14.4295 65.4223 14.0448 65.7309 13.8138C66.0394 13.5827 66.4614 13.4679 67.0025 13.4679C67.2311 13.4669 67.4594 13.4827 67.6857 13.5152C67.8825 13.5427 68.0721 13.608 68.244 13.7076C68.408 13.8039 68.5429 13.9427 68.6344 14.1094C68.7402 14.3282 68.7895 14.57 68.7779 14.8127C68.7917 14.9323 68.7762 15.0535 68.7327 15.1658C68.6892 15.278 68.619 15.3781 68.5282 15.4571C68.3124 15.6227 68.0623 15.7379 67.7962 15.7944C67.4477 15.8798 67.0931 15.9379 66.7355 15.9681C66.338 16.0069 65.9332 16.06 65.5228 16.1231C65.1107 16.1875 64.7025 16.2742 64.2999 16.3829C63.9147 16.4836 63.5497 16.6497 63.2206 16.8738C62.8981 17.1018 62.6341 17.4028 62.4498 17.7521C62.2354 18.1854 62.1328 18.6655 62.1513 19.1486C62.1404 19.6053 62.229 20.0588 62.4111 20.4777C62.574 20.8381 62.8199 21.1549 63.1287 21.402C63.4486 21.6521 63.815 21.836 64.2066 21.9431C64.6397 22.0609 65.0869 22.1188 65.5357 22.1153C66.1489 22.1154 66.7587 22.025 67.3455 21.8469C67.9322 21.6687 68.4634 21.343 68.8885 20.9011C68.9008 21.0664 68.9228 21.2307 68.9545 21.3934C68.9871 21.5527 69.0293 21.7099 69.0808 21.8642H71.8551C71.7006 21.5787 71.6086 21.2636 71.5853 20.9399C71.5335 20.5098 71.5096 20.0769 71.5135 19.6438V19.6453ZM68.7779 18.0062C68.7743 18.2127 68.758 18.4188 68.7291 18.6233C68.6942 18.8917 68.6059 19.1504 68.4693 19.384C68.3108 19.6524 68.0853 19.875 67.8149 20.0299C67.5192 20.2107 67.0972 20.2997 66.5619 20.2997C66.349 20.3006 66.1366 20.2809 65.9275 20.2409C65.7364 20.2091 65.5532 20.1409 65.3878 20.0399C65.2327 19.9429 65.1063 19.8061 65.0218 19.6438C64.9267 19.4529 64.8804 19.2413 64.8869 19.0281C64.8793 18.8083 64.9256 18.59 65.0218 18.3923C65.1082 18.2293 65.2298 18.0876 65.3778 17.9775C65.5363 17.8633 65.7122 17.7756 65.8988 17.7177C66.0972 17.6536 66.2995 17.6023 66.5045 17.5641C66.7226 17.5254 66.9422 17.4924 67.1589 17.468C67.3757 17.4436 67.5895 17.4091 67.7862 17.3718C67.9751 17.3359 68.1616 17.2879 68.3445 17.2283C68.5027 17.1776 68.6492 17.0956 68.7751 16.9871L68.7779 18.0062ZM76.6174 8.91234H73.8817V11.8991H72.2226V13.7291H73.8774V19.6065C73.8599 20.0253 73.9462 20.4419 74.1286 20.8193C74.2838 21.1184 74.5207 21.3672 74.8118 21.5369C75.1223 21.7121 75.4632 21.8265 75.8165 21.8742C76.2151 21.9331 76.6177 21.9619 77.0207 21.9603C77.2905 21.9603 77.5661 21.9603 77.8488 21.9431C78.1071 21.9322 78.3645 21.9059 78.6196 21.8642V19.74C78.486 19.7682 78.3508 19.7879 78.2148 19.7988C78.0713 19.8117 77.9278 19.8189 77.7713 19.8189C77.3106 19.8189 77.0006 19.74 76.847 19.5864C76.6934 19.4328 76.6159 19.1242 76.6159 18.6621V13.7291H78.6253V11.8991H76.6159L76.6174 8.91234ZM87.9244 17.4967C87.7456 17.184 87.5007 16.9141 87.2068 16.7058C86.8985 16.4876 86.56 16.3154 86.2021 16.1949C85.8189 16.0664 85.4295 15.9577 85.0352 15.8691C84.6506 15.7786 84.2731 15.6954 83.8999 15.6179C83.5643 15.5495 83.2328 15.4628 82.9067 15.3581C82.6505 15.2789 82.4121 15.1507 82.2049 14.9806C82.1177 14.9083 82.0481 14.8171 82.0014 14.7139C81.9546 14.6107 81.9319 14.4982 81.935 14.385C81.9251 14.2077 81.9796 14.0329 82.0886 13.8927C82.1902 13.7693 82.3189 13.6711 82.4646 13.6057C82.6213 13.5402 82.7867 13.4982 82.9555 13.4808C83.1219 13.4631 83.2891 13.454 83.4564 13.4535C83.897 13.4424 84.3338 13.5379 84.7295 13.732C85.0869 13.9185 85.2878 14.2745 85.3251 14.8012H87.9244C87.8964 14.259 87.7341 13.7323 87.4522 13.2684C87.1987 12.8742 86.8597 12.5421 86.4604 12.2967C86.0419 12.0447 85.5823 11.8683 85.1027 11.7757C84.5861 11.6727 84.0606 11.6213 83.5339 11.6221C83.0044 11.6217 82.4759 11.6697 81.9551 11.7656C81.4678 11.8533 80.999 12.0232 80.5687 12.268C80.1599 12.5022 79.8179 12.8372 79.5754 13.2411C79.3247 13.6516 79.1994 14.1778 79.1994 14.8199C79.1869 15.2075 79.2807 15.5912 79.4707 15.9293C79.6505 16.2303 79.8958 16.4868 80.1883 16.68C80.499 16.8867 80.8372 17.0485 81.193 17.1608C81.5719 17.2842 81.9609 17.389 82.3584 17.4794C83.1336 17.6295 83.8967 17.8358 84.6419 18.0966C85.1873 18.3014 85.46 18.6095 85.46 19.0209C85.4683 19.2364 85.408 19.449 85.2878 19.628C85.1743 19.7863 85.0273 19.9176 84.8572 20.0127C84.6776 20.1119 84.4841 20.1835 84.2831 20.2251C84.0836 20.2684 83.8802 20.291 83.676 20.2926C83.4132 20.2937 83.1513 20.2613 82.8967 20.1964C82.6589 20.138 82.4337 20.0368 82.2321 19.8979C82.0376 19.7614 81.8759 19.5834 81.7585 19.3769C81.6321 19.1436 81.5693 18.8813 81.5762 18.6162H78.9683C78.9632 19.1641 79.0998 19.704 79.3649 20.1836C79.6299 20.6631 80.0144 21.066 80.4811 21.3532C80.9348 21.63 81.4338 21.8243 81.9551 21.9273C82.5122 22.0427 83.0798 22.1004 83.6487 22.0996C84.2082 22.1001 84.7664 22.0453 85.3151 21.9359C85.8317 21.8368 86.3253 21.6421 86.7704 21.3618C87.2292 21.0779 87.6034 20.6759 87.8538 20.198C88.1042 19.7201 88.2218 19.1837 88.1942 18.6449C88.2048 18.2453 88.1118 17.8497 87.9244 17.4967ZM93.3554 8.10284L88.154 21.8599H91.1982L92.2761 18.797H97.4201L98.4607 21.8599H101.601L96.4585 8.10284H93.3554ZM93.0684 16.5422L94.861 11.4944H94.8998L96.6307 16.5494L93.0684 16.5422ZM111.059 13.2411C110.684 12.7496 110.203 12.348 109.653 12.0656C109.025 11.7557 108.332 11.6035 107.632 11.6221C107.047 11.6152 106.467 11.7402 105.937 11.9881C105.407 12.2461 104.964 12.6551 104.665 13.1636H104.627V11.8991H102.023V25.349H104.76V20.6284H104.803C105.124 21.1051 105.566 21.4872 106.085 21.735C106.617 21.9881 107.2 22.1167 107.79 22.111C108.454 22.1238 109.111 21.9761 109.706 21.6805C110.241 21.4071 110.708 21.0183 111.074 20.5423C111.446 20.0525 111.724 19.4977 111.893 18.9061C112.071 18.2796 112.159 17.6312 112.156 16.98C112.158 16.2935 112.068 15.61 111.888 14.9476C111.722 14.3335 111.44 13.7567 111.058 13.2483L111.059 13.2411ZM109.307 18.0765C109.239 18.433 109.105 18.7736 108.912 19.0812C108.726 19.3698 108.475 19.6107 108.179 19.7845C107.686 20.0712 107.102 20.1581 106.547 20.0273C105.992 19.8965 105.508 19.5579 105.195 19.0812C105.001 18.7733 104.864 18.433 104.79 18.0765C104.706 17.6908 104.664 17.2972 104.665 16.9025C104.664 16.5011 104.702 16.1006 104.78 15.7069C104.848 15.3451 104.982 14.9987 105.175 14.685C105.361 14.3924 105.612 14.1468 105.908 13.9673C106.25 13.7709 106.64 13.674 107.034 13.6875C107.422 13.6756 107.806 13.7726 108.142 13.9673C108.442 14.1512 108.696 14.4017 108.884 14.6993C109.081 15.0156 109.221 15.3645 109.297 15.7298C109.381 16.1165 109.423 16.5111 109.422 16.9068C109.422 17.302 109.383 17.6962 109.306 18.0837L109.307 18.0765ZM122.79 14.9462C122.626 14.3297 122.345 13.7507 121.962 13.2411C121.586 12.7498 121.106 12.3482 120.557 12.0656C119.928 11.7556 119.233 11.6034 118.533 11.6221C117.948 11.6154 117.368 11.7405 116.838 11.9881C116.308 12.2471 115.866 12.6558 115.566 13.1636H115.529V11.8991H112.927V25.349H115.654V20.6284H115.692C116.014 21.1048 116.456 21.4868 116.974 21.735C117.507 21.9879 118.09 22.1165 118.679 22.111C119.343 22.1238 120.001 21.9761 120.595 21.6805C121.13 21.4071 121.597 21.0183 121.963 20.5423C122.336 20.0531 122.614 19.498 122.781 18.9061C122.963 18.2798 123.054 17.6306 123.051 16.9785C123.056 16.2947 122.968 15.6134 122.788 14.9534L122.79 14.9462ZM120.206 18.0765C120.139 18.4331 120.005 18.7739 119.812 19.0812C119.626 19.3695 119.375 19.6103 119.08 19.7845C118.586 20.0717 118.002 20.1589 117.446 20.0281C116.891 19.8972 116.406 19.5584 116.093 19.0812C115.9 18.7728 115.763 18.4326 115.688 18.0765C115.605 17.6907 115.563 17.2971 115.563 16.9025C115.563 16.5011 115.602 16.1007 115.68 15.7069C115.748 15.3452 115.882 14.999 116.074 14.685C116.26 14.3931 116.511 14.1476 116.806 13.9673C117.148 13.771 117.539 13.674 117.933 13.6875C118.321 13.6753 118.704 13.7723 119.04 13.9673C119.34 14.1513 119.594 14.4017 119.783 14.6993C119.981 15.0156 120.121 15.3645 120.196 15.7298C120.281 16.1164 120.323 16.511 120.323 16.9068C120.323 17.3019 120.285 17.6961 120.208 18.0837L120.206 18.0765Z" fill="white"></path><path d="M0 29.2371L2.00937 21.9259C0.458284 19.2342 -0.16144 16.106 0.246288 13.0263C0.654016 9.94653 2.06642 7.08734 4.2645 4.89203C6.46258 2.69672 9.32354 1.28792 12.4038 0.884071C15.484 0.480223 18.6114 1.10389 21.3012 2.65837C23.9909 4.21285 26.0926 6.61129 27.2805 9.48182C28.4683 12.3523 28.676 15.5346 27.8712 18.5351C27.0664 21.5357 25.2941 24.1869 22.8292 26.0777C20.3643 27.9685 17.3444 28.9933 14.2378 28.9931C11.8807 28.9914 9.56154 28.3993 7.49209 27.2708L0 29.2371ZM7.82938 24.7203L8.25996 24.9744C10.0674 26.0455 12.1297 26.6106 14.2307 26.6106C16.8317 26.6106 19.359 25.7463 21.4153 24.1535C23.4715 22.5607 24.9402 20.3297 25.5903 17.8112C26.2405 15.2927 26.0353 12.6296 25.007 10.2405C23.9786 7.85138 22.1855 5.87172 19.9095 4.61274C17.6335 3.35376 15.0036 2.88684 12.4333 3.28538C9.86295 3.68392 7.49796 4.92533 5.71006 6.81445C3.92217 8.70357 2.81275 11.1333 2.55622 13.7216C2.29969 16.31 2.91059 18.9102 4.29288 21.1135L4.57132 21.557L3.3901 25.8786L7.82938 24.7203Z" fill="white"></path><path d="M0.490845 28.7491L2.42415 21.6905C0.925605 19.0927 0.325905 16.0732 0.718018 13.0999C1.11013 10.1267 2.47215 7.36585 4.59293 5.24543C6.71371 3.125 9.47478 1.76344 12.4481 1.37182C15.4214 0.980208 18.4408 1.58041 21.0383 3.07939C23.6358 4.57837 25.6663 6.89239 26.8149 9.6627C27.9635 12.433 28.1661 15.5049 27.3913 18.402C26.6164 21.2992 24.9075 23.8598 22.5294 25.687C20.1513 27.5141 17.2368 28.5057 14.2378 28.508C11.9628 28.5083 9.72398 27.9383 7.72602 26.8503L0.490845 28.7491Z" fill="url(#paint0_linear_1312_10284)"></path><path d="M0 29.2371L2.00937 21.9259C0.458284 19.2342 -0.16144 16.106 0.246288 13.0263C0.654016 9.94653 2.06642 7.08734 4.2645 4.89203C6.46258 2.69672 9.32354 1.28792 12.4038 0.884071C15.484 0.480223 18.6114 1.10389 21.3012 2.65837C23.9909 4.21285 26.0926 6.61129 27.2805 9.48182C28.4683 12.3523 28.676 15.5346 27.8712 18.5351C27.0664 21.5357 25.2941 24.1869 22.8292 26.0777C20.3643 27.9685 17.3444 28.9933 14.2378 28.9931C11.8807 28.9914 9.56154 28.3993 7.49209 27.2708L0 29.2371ZM7.82938 24.7203L8.25996 24.9744C10.0674 26.0455 12.1297 26.6106 14.2307 26.6106C16.8317 26.6106 19.359 25.7463 21.4153 24.1535C23.4715 22.5607 24.9402 20.3297 25.5903 17.8112C26.2405 15.2927 26.0353 12.6296 25.007 10.2405C23.9786 7.85138 22.1855 5.87172 19.9095 4.61274C17.6335 3.35376 15.0036 2.88684 12.4333 3.28538C9.86295 3.68392 7.49796 4.92533 5.71006 6.81445C3.92217 8.70357 2.81275 11.1333 2.55622 13.7216C2.29969 16.31 2.91059 18.9102 4.29288 21.1135L4.57132 21.557L3.3901 25.8786L7.82938 24.7203Z" fill="url(#paint1_linear_1312_10284)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10.7057 8.97401C10.4416 8.38555 10.1631 8.37407 9.91196 8.36402C9.70671 8.35541 9.47133 8.35541 9.23595 8.35541C9.05708 8.36019 8.88115 8.40208 8.71932 8.47842C8.55749 8.55477 8.41329 8.6639 8.29585 8.7989C7.97292 9.15198 7.06152 10.0045 7.06152 11.7398C7.06152 13.475 8.32599 15.1514 8.49679 15.3868C8.66759 15.6222 10.9367 19.2964 14.5249 20.7102C17.5045 21.8857 18.1131 21.6517 18.7561 21.5929C19.3991 21.534 20.8429 20.7317 21.1372 19.9165C21.4314 19.1012 21.4314 18.3865 21.3424 18.2401C21.2534 18.0937 21.0195 18.0047 20.6664 17.8282C20.3133 17.6516 18.581 16.7976 18.2566 16.6799C17.9322 16.5623 17.6983 16.5048 17.4629 16.8579C17.2275 17.211 16.5529 18.0061 16.3477 18.2401C16.1424 18.474 15.9358 18.5042 15.5827 18.3276C15.2296 18.1511 14.0943 17.7794 12.7466 16.578C11.9761 15.8657 11.3149 15.0435 10.7846 14.1381C10.5794 13.7865 10.7631 13.5941 10.9396 13.4205C11.1161 13.2468 11.2927 13.0085 11.4692 12.8033C11.6133 12.6245 11.7317 12.4264 11.8209 12.2148C11.8676 12.1174 11.8895 12.0099 11.8845 11.9019C11.8795 11.794 11.8478 11.6889 11.7922 11.5962C11.7046 11.4154 11.02 9.67011 10.7057 8.97401Z" fill="white"></path><path d="M128.795 8.1028H134.301C135 8.08345 135.697 8.18743 136.36 8.40995C136.856 8.58074 137.31 8.85688 137.689 9.21944C138.014 9.54174 138.259 9.93472 138.407 10.3677C138.552 10.783 138.626 11.2195 138.628 11.6594C138.63 12.0213 138.564 12.3804 138.436 12.7186C138.311 13.0461 138.125 13.3466 137.887 13.6042C137.379 14.1497 136.693 14.4974 135.953 14.5859L135.991 14.6232C136.207 14.6314 136.421 14.6705 136.626 14.7395C137.001 14.8497 137.356 15.0219 137.675 15.249C138.068 15.5277 138.401 15.8813 138.657 16.2896C138.944 16.7316 139.087 17.2995 139.087 17.9932C139.1 18.564 138.981 19.1301 138.741 19.6481C138.514 20.1185 138.181 20.5301 137.768 20.8508C137.318 21.1948 136.804 21.4469 136.257 21.5929C135.617 21.7659 134.956 21.8499 134.293 21.8426H128.788L128.795 8.1028ZM134.301 14.339C135.469 14.339 136.342 14.0793 136.919 13.5597C137.496 13.0401 137.783 12.3569 137.78 11.5101C137.795 11.0718 137.696 10.6371 137.493 10.2485C137.306 9.91464 137.042 9.63059 136.722 9.42038C136.384 9.20218 136.009 9.04886 135.615 8.96827C135.182 8.87714 134.74 8.83192 134.296 8.83335H129.639V14.339H134.301ZM134.301 21.1149C135.533 21.1149 136.499 20.8552 137.198 20.3356C137.898 19.816 138.248 19.0367 138.248 17.9975C138.269 17.4877 138.142 16.9827 137.882 16.5436C137.647 16.1743 137.327 15.867 136.949 15.648C136.554 15.4243 136.124 15.2713 135.677 15.1959C135.223 15.1139 134.762 15.0721 134.301 15.071H129.643V21.1149H134.301Z" fill="white"></path><path d="M148.623 21.847H147.891V19.7299H147.852C147.73 20.0903 147.545 20.4257 147.304 20.7203C147.068 21.0089 146.789 21.2592 146.476 21.4623C146.159 21.6686 145.812 21.8245 145.447 21.9245C145.077 22.0262 144.695 22.0779 144.312 22.078C143.812 22.0885 143.313 22.0148 142.838 21.8599C142.473 21.7418 142.136 21.552 141.846 21.3016C141.597 21.0813 141.391 20.8171 141.239 20.5222C141.095 20.2454 140.989 19.9511 140.922 19.6467C140.858 19.3635 140.82 19.0754 140.805 18.7855C140.794 18.51 140.787 18.2688 140.787 18.0679V11.9565H141.519V18.2129C141.522 18.5251 141.541 18.837 141.576 19.1472C141.617 19.5188 141.731 19.8785 141.913 20.205C142.115 20.5622 142.402 20.8633 142.75 21.0805C143.122 21.326 143.649 21.4465 144.329 21.4465C144.842 21.4547 145.352 21.3498 145.82 21.1394C146.255 20.9395 146.64 20.6453 146.947 20.2782C147.266 19.8928 147.505 19.4479 147.65 18.9693C147.814 18.4298 147.895 17.8683 147.89 17.3043V11.9565H148.622L148.623 21.847Z" fill="white"></path><path d="M151.125 18.5588C151.142 18.9829 151.247 19.399 151.433 19.7802C151.606 20.1276 151.847 20.4369 152.141 20.6898C152.436 20.9427 152.778 21.1341 153.147 21.2528C153.551 21.3844 153.973 21.4494 154.397 21.4451C154.743 21.4431 155.087 21.4143 155.428 21.359C155.782 21.305 156.126 21.1981 156.448 21.0418C156.756 20.8926 157.024 20.671 157.228 20.3959C157.443 20.0893 157.551 19.7208 157.536 19.3467C157.536 18.7956 157.369 18.3789 157.035 18.0966C156.664 17.7942 156.235 17.5714 155.774 17.4421C155.237 17.2805 154.691 17.1548 154.138 17.0661C153.579 16.9774 153.031 16.8332 152.501 16.6355C152.024 16.4627 151.593 16.1828 151.241 15.8174C150.907 15.4643 150.74 14.9481 150.74 14.2687C150.724 13.8375 150.838 13.4115 151.067 13.0459C151.281 12.7233 151.568 12.4562 151.906 12.2665C152.264 12.0677 152.651 11.9277 153.054 11.8518C153.472 11.769 153.898 11.7272 154.324 11.7269C154.811 11.7235 155.296 11.7818 155.768 11.9006C156.191 12.003 156.587 12.1932 156.932 12.4589C157.263 12.7205 157.527 13.057 157.703 13.4406C157.9 13.8958 157.995 14.3886 157.981 14.8845H157.249C157.26 14.4879 157.184 14.0937 157.028 13.7291C156.891 13.4222 156.679 13.1544 156.412 12.9497C156.133 12.7425 155.816 12.5918 155.479 12.5062C155.105 12.4088 154.719 12.3605 154.331 12.3627C153.994 12.3633 153.658 12.3954 153.327 12.4589C153.006 12.5163 152.697 12.6269 152.412 12.7861C152.15 12.9338 151.923 13.1377 151.748 13.3832C151.569 13.6433 151.478 13.9535 151.488 14.2687C151.471 14.6127 151.572 14.952 151.775 15.2304C151.979 15.4834 152.239 15.6846 152.536 15.8174C152.875 15.9737 153.229 16.093 153.594 16.1733C153.986 16.2642 154.381 16.3542 154.778 16.4432C155.266 16.5331 155.724 16.6388 156.154 16.7604C156.55 16.8681 156.927 17.0371 157.271 17.2613C157.581 17.4696 157.836 17.7504 158.013 18.0794C158.205 18.4742 158.298 18.9105 158.281 19.3496C158.301 19.8199 158.173 20.2846 157.915 20.6786C157.674 21.0232 157.359 21.3092 156.992 21.5154C156.607 21.7324 156.187 21.8824 155.751 21.9589C155.309 22.0408 154.861 22.0826 154.412 22.0838C153.881 22.088 153.352 22.0135 152.843 21.8627C152.382 21.7253 151.953 21.4958 151.583 21.1882C151.222 20.8861 150.933 20.5083 150.736 20.0816C150.521 19.6037 150.409 19.0857 150.409 18.5616L151.125 18.5588Z" fill="white"></path><path d="M160.212 10.0907V8.10284H160.942V10.0907H160.212ZM160.212 21.8527V11.9565H160.942V21.8513L160.212 21.8527Z" fill="white"></path><path d="M163.271 11.9565H164.003V14.075H164.042C164.163 13.7138 164.349 13.3777 164.591 13.0832C164.827 12.7953 165.107 12.5451 165.419 12.3412C165.735 12.1348 166.083 11.9793 166.448 11.8805C166.818 11.7774 167.2 11.7253 167.584 11.7255C168.084 11.7135 168.581 11.7853 169.057 11.9379C169.421 12.0563 169.758 12.2461 170.047 12.4962C170.296 12.7165 170.502 12.9807 170.654 13.2755C170.798 13.5525 170.904 13.8468 170.972 14.151C171.035 14.4343 171.074 14.7224 171.088 15.0122C171.099 15.2878 171.107 15.5289 171.107 15.7298V21.8512H170.375V15.5906C170.371 15.2818 170.352 14.9733 170.317 14.6663C170.278 14.2913 170.163 13.9281 169.98 13.5985C169.776 13.2397 169.485 12.9385 169.133 12.723C168.75 12.479 168.227 12.357 167.564 12.357C167.047 12.3468 166.535 12.4517 166.063 12.6641C165.633 12.8666 165.252 13.1605 164.946 13.5253C164.628 13.9104 164.389 14.3555 164.245 14.8342C164.079 15.3735 163.998 15.9351 164.003 16.4991V21.8512H163.271V11.9565Z" fill="white"></path><path d="M173.532 16.9958V17.112C173.53 17.6718 173.608 18.2291 173.763 18.7669C173.905 19.2672 174.138 19.7372 174.45 20.1533C174.751 20.5509 175.141 20.8736 175.588 21.0963C176.084 21.3361 176.63 21.4546 177.181 21.4422C178.171 21.4422 178.956 21.1824 179.535 20.6629C180.114 20.1433 180.513 19.4214 180.732 18.497H181.464C181.246 19.652 180.774 20.5375 180.049 21.1537C179.323 21.7699 178.366 22.078 177.178 22.078C176.518 22.0929 175.863 21.958 175.262 21.6833C174.731 21.4315 174.264 21.0631 173.896 20.6055C173.517 20.1264 173.239 19.5764 173.077 18.9879C172.893 18.3341 172.803 17.6577 172.808 16.9785C172.807 16.3042 172.904 15.6332 173.095 14.9864C173.265 14.3803 173.549 13.8119 173.931 13.3114C174.306 12.8303 174.783 12.4382 175.328 12.1632C175.924 11.8861 176.571 11.7385 177.228 11.7301C177.885 11.7217 178.536 11.8527 179.139 12.1144C179.657 12.3603 180.114 12.7187 180.476 13.1636C180.844 13.6207 181.121 14.1433 181.294 14.7036C181.487 15.3107 181.584 15.9441 181.581 16.581C181.581 16.6455 181.581 16.7245 181.571 16.802C181.561 16.8795 181.561 16.9455 181.561 17.0044L173.532 16.9958ZM180.809 16.3614C180.787 15.8413 180.696 15.3264 180.539 14.8299C180.394 14.3666 180.161 13.9354 179.853 13.5597C179.552 13.1947 179.177 12.8965 178.754 12.6842C178.294 12.4598 177.788 12.3476 177.277 12.357C176.737 12.3452 176.201 12.4608 175.714 12.6943C175.277 12.9075 174.889 13.2085 174.574 13.5784C174.257 13.9566 174.014 14.3908 173.857 14.8586C173.689 15.3442 173.585 15.8492 173.547 16.3614H180.809Z" fill="white"></path><path d="M183.599 18.5588C183.616 18.9829 183.721 19.399 183.908 19.7802C184.081 20.1276 184.321 20.4369 184.616 20.6898C184.91 20.9427 185.252 21.1341 185.622 21.2528C186.025 21.3846 186.448 21.4495 186.873 21.4451C187.218 21.4431 187.562 21.4143 187.902 21.359C188.256 21.305 188.6 21.1981 188.923 21.0418C189.231 20.8926 189.498 20.671 189.702 20.3959C189.917 20.0894 190.025 19.7208 190.011 19.3467C190.011 18.7956 189.844 18.3789 189.51 18.0966C189.139 17.7942 188.709 17.5714 188.248 17.4421C187.712 17.2805 187.165 17.1549 186.612 17.0661C186.054 16.9771 185.505 16.8328 184.976 16.6355C184.499 16.4627 184.068 16.1828 183.716 15.8174C183.382 15.4643 183.215 14.9481 183.215 14.2687C183.199 13.8375 183.313 13.4115 183.542 13.0459C183.755 12.7233 184.043 12.4562 184.38 12.2665C184.738 12.0677 185.126 11.9277 185.528 11.8518C185.947 11.769 186.372 11.7272 186.798 11.7269C187.285 11.7235 187.77 11.7818 188.242 11.9006C188.665 12.003 189.062 12.1932 189.406 12.4589C189.737 12.7205 190.001 13.057 190.177 13.4406C190.374 13.8958 190.469 14.3886 190.456 14.8845H189.725C189.735 14.4878 189.659 14.0936 189.502 13.7291C189.365 13.4222 189.154 13.1544 188.887 12.9497C188.608 12.7425 188.291 12.5918 187.954 12.5062C187.579 12.4088 187.193 12.3605 186.806 12.3627C186.468 12.3633 186.132 12.3955 185.801 12.4589C185.48 12.5163 185.171 12.6269 184.887 12.7861C184.624 12.9338 184.397 13.1377 184.222 13.3832C184.044 13.6433 183.953 13.9535 183.962 14.2687C183.945 14.6127 184.047 14.952 184.249 15.2304C184.453 15.4834 184.714 15.6846 185.01 15.8174C185.349 15.9737 185.704 16.093 186.068 16.1733C186.46 16.2642 186.855 16.3542 187.252 16.4432C187.74 16.5331 188.199 16.6388 188.628 16.7604C189.024 16.8681 189.401 17.0371 189.745 17.2613C190.055 17.4696 190.31 17.7504 190.487 18.0794C190.68 18.4742 190.772 18.9106 190.755 19.3496C190.775 19.8197 190.647 20.2842 190.391 20.6787C190.149 21.0229 189.833 21.3088 189.467 21.5154C189.081 21.7324 188.661 21.8824 188.225 21.9589C187.784 22.0407 187.336 22.0825 186.887 22.0838C186.356 22.0881 185.827 22.0136 185.317 21.8627C184.856 21.7253 184.427 21.4958 184.057 21.1882C183.697 20.8857 183.408 20.508 183.21 20.0816C182.996 19.6035 182.884 19.0856 182.883 18.5616L183.599 18.5588Z" fill="white"></path><path d="M192.859 18.5587C192.875 18.9829 192.98 19.3991 193.167 19.7802C193.34 20.1276 193.58 20.4369 193.875 20.6898C194.169 20.9427 194.511 21.1341 194.88 21.2527C195.284 21.3845 195.707 21.4495 196.132 21.4451C196.477 21.443 196.821 21.4142 197.161 21.359C197.515 21.305 197.859 21.1981 198.181 21.0418C198.49 20.8926 198.757 20.671 198.961 20.3959C199.176 20.0893 199.284 19.7208 199.269 19.3467C199.269 18.7956 199.102 18.3789 198.768 18.0966C198.398 17.7944 197.969 17.5717 197.508 17.4421C196.972 17.2808 196.425 17.1552 195.872 17.0661C195.313 16.9772 194.765 16.833 194.234 16.6355C193.757 16.4627 193.326 16.1828 192.974 15.8174C192.64 15.4643 192.473 14.9481 192.473 14.2687C192.457 13.8375 192.571 13.4115 192.801 13.0459C193.014 12.7233 193.302 12.4562 193.639 12.2665C193.997 12.0677 194.385 11.9277 194.787 11.8518C195.205 11.769 195.631 11.7272 196.057 11.7269C196.544 11.7235 197.029 11.7818 197.501 11.9006C197.924 12.003 198.321 12.1932 198.665 12.4589C198.996 12.7205 199.26 13.057 199.436 13.4406C199.633 13.8958 199.728 14.3886 199.714 14.8845H198.984C198.994 14.4878 198.918 14.0936 198.761 13.7291C198.624 13.4222 198.412 13.1544 198.146 12.9497C197.866 12.7425 197.55 12.5918 197.213 12.5062C196.838 12.4088 196.452 12.3605 196.064 12.3627C195.727 12.3633 195.391 12.3955 195.06 12.4589C194.739 12.5163 194.43 12.6269 194.145 12.7861C193.883 12.9338 193.656 13.1377 193.481 13.3832C193.303 13.6433 193.212 13.9535 193.221 14.2687C193.204 14.6127 193.305 14.952 193.508 15.2304C193.712 15.4834 193.972 15.6846 194.269 15.8174C194.608 15.9739 194.963 16.0932 195.328 16.1733C195.719 16.2642 196.113 16.3542 196.511 16.4432C196.999 16.5331 197.458 16.6388 197.887 16.7604C198.283 16.8681 198.66 17.0371 199.004 17.2613C199.314 17.4695 199.569 17.7504 199.746 18.0794C199.939 18.4742 200.031 18.9105 200.014 19.3496C200.034 19.8197 199.906 20.2842 199.65 20.6786C199.408 21.0229 199.092 21.3088 198.725 21.5154C198.34 21.7324 197.92 21.8824 197.484 21.9589C197.043 22.0407 196.595 22.0825 196.146 22.0838C195.615 22.0882 195.087 22.0137 194.577 21.8627C194.116 21.7256 193.686 21.4961 193.316 21.1882C192.956 20.8857 192.667 20.5079 192.469 20.0816C192.255 19.6035 192.143 19.0856 192.142 18.5616L192.859 18.5587Z" fill="white"></path></g><defs><linearGradient id="paint0_linear_1312_10284" x1="14.1747" y1="28.7448" x2="14.1747" y2="1.25514" gradientUnits="userSpaceOnUse"><stop stop-color="#20B038"></stop><stop offset="1" stop-color="#60D66A"></stop></linearGradient><linearGradient id="paint1_linear_1312_10284" x1="14.1747" y1="29.2371" x2="14.1747" y2="0.762867" gradientUnits="userSpaceOnUse"><stop stop-color="#F9F9F9"></stop><stop offset="1" stop-color="white"></stop></linearGradient><clipPath id="clip0_1312_10284"><rect width="200" height="28.4742" fill="white" transform="translate(0 0.762878)"></rect></clipPath></defs></svg>

                </span>

            </a>
            <ul className='flex flex-row items-center justify-center'>
                <li>
                    <a className='p-4 whitespace-nowrap text-white text-base' href="">Products</a>
                </li>
                <li>
                    <a className='p-4 whitespace-nowrap text-white text-base' href="">Resources</a>
                </li>
                <li>
                    <a className='p-4 whitespace-nowrap text-white text-base' href="">Blog</a>
                </li>
                <li>
                    <a className='p-4 whitespace-nowrap text-white text-base' href="">Developers</a>
                </li>
            </ul>
            <div className='flex flex-row justify-end items-center'>
              <a className='bg-[#43cd66] text-[#103928] whitespace-nowrap py-4 px-16 m-0 text-base h-[min-content] rounded-3xl items-center' href="">Learn more</a>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Header   