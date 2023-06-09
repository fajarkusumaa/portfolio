// import React from "react";
import "./Hero.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = () => {
    return (
        <>
            <div className="flex items-center gap-4">
                {/* left side */}
                <div className="flex flex-col items-end justify-start gap-4">
                    <div className="flip-card my-btn p-0 w-36 h-20 rounded-xl overflow-hidden">
                        <div className="flip-card-inner-h">
                            <div
                                className="flip-card-front rounded-xl bg-center"
                                style={{
                                    backgroundImage: `url(
                                        "https://lh3.googleusercontent.com/pw/AJFCJaVRpJsWb42We5zGsVMAj-w0nJ95WeQZwvhHIgWGyLNv6GuWpKv2z-cvCD4JEv9LVMNFcdT3fj-s2WWzHOSI3PT0kGcFKvvdznLUi-wd50oWHuAYXjc2MhEfzGy-eeYL_uThBbhvIFKs9JHWzS-nmw0LW9CGwiWTWAhhCKS-MSivcKupmidTYWUO3CSRMWZmmKcgfuOi1-F7RIdAdKh6ctrulMDZJFKunaT2dSDPudy_oNCGTJFNi84jxkU5J6ZPUYy33tTPZFzxcnLI7jYb7u3DhwkQ4213rDTN7jwUhd5y0A0sijfJE18aPnNhg0YA44wSV-QEGMypD9tMexcK3DtaNyD-jDMeSv57Ph9U1yaHaMacsfSBJrKDxoDutPeGEzaJ11Bu81ashbB_xNoFyGSAP5NWQFhn6gtzk2IktzJC2TouPz4wxZwGTBya8pl-EXPVPbs2-rGGL5WwJhXRjj_LZkEXD9tgQ76rfAK4Ak36MSA0S6Q4x962cHMr7-n6Hnj0Dqq-MnKM6wDWyOUfVdFEylQrXlz7Sa_kCONbOGPL3ItZN4GF0PClnUYGP_kbV_EA04wipRWcgAkFMGeTAGEOL3upgYf3kFODx1cw9bylUYImKseFFCqMSpeA1wigKxrdqFAlof1R3RBWhmte06r7QXkjgweYWISlOu4lLnNeGkGPSuk4rP-sgmkKpXH8AGGSygfaJYWoXxWkcaAw86dPkvYiCrytZKzp57e17xZeBRmQCGGtBMIlkDAo3G0KhaoNwfoKHlpibRb82rvyNJtXbtAJ5db0I9dNB2YSCxSuATyJ_2664U4_5864tiys-2Nox5pt_zO9_qLufKbvbYHtcFYtbFvsrueU_ZLtnyx-eZRTtS654KqO8pRYE2ZQ40iAdS2sWbE7VoXAuzbgZXgo_Pw_3KD8UN-Fj3YjUepwAHO6G-J4CW9fpSmzOA=w144-h80-s-no?authuser=0"
                                    )`
                                }}
                            ></div>
                            <div className="flip-card-back rounded-xl bg-zinc-900">
                                <a
                                    href="https://github.com/fajarkusumaa"
                                    target="blank"
                                >
                                    <i className="fa-brands fa-github fa-2xl text-white"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flip-card my-btn p-0 w-48 h-36 rounded-xl overflow-hidden">
                        <div className="flip-card-inner-h">
                            <div
                                className="flip-card-front rounded-xl"
                                style={{
                                    backgroundImage: `url(
                                        "https://lh3.googleusercontent.com/pw/AJFCJaUUwUNg6aTkU8LiGT-FCJv8r6hNXIaEzgZ2phD_GlBecKqi7bMWSMfk5ULdbx6NdyLAZrOfirvCD61ZCsKlBm6CZ08lCiUBIMqUL_aphIeTmAaGSoDovoRyIeO1KE0X6Qzrpfcpi_mimBtow6mDO05AIjy8LUzK0JYJwK2IqUtgrqlg-Vd4e6jUJd2EyKa5Sj4hBjBMi05W0tfLZ4bWUYQsQaEuWOvCa5vLuwNo01hHQNLWI3ZKIXZGJgb2OeIxMyKRKyRyVII2HokmrZKAjLzRcB11yQPe25AAOuPa0FhPm19uNDe-jfZmcQ4QxL7vDiqfQgmvlDrrHe9lL445KqQeE_4HnM0jOAg72CS5uefD5uBX_sm4lS3JdSvTs4WXLH-unJqLQMC5VBVea4OYmYnVQb3A21KP_oPQOdEqf2_5eUyRKIuyBoDZGArfZnc8yfePNV3fT18xJFtXTRwsW5kBs-x52VOcLbNKEuUUA5qTD1BKs_mH1Va-h6kPop237RO1cnHQGfppYKI-bzdu94xA_GalgZI7D-nIoPsgnPo8P5anFRbH_4ZcktIvcJ7CTbxyx95Lhsqv0bVDqotJqbE0OBw2fWRY6OqC2S4UCJ6cy5WB47-egXnBqEQCY3X3FX4d_92olElAc8GhJrERayTSkXuyfpWGI3NTi5pPos17lYc6aa2rqwOG_we29DgjV9HTdhCRxKvveeF5pEfunFYCSuIKTzbwHFylV-0fofz1yzcX42cUbXGyDvj0zOSZRiyZp-r8HmVKek-Y8r7_zp9-7aaPF-AmSDnvrDl-LoWpvPebNBbaWee2lEKETpv276Rmu9_ZP7kjJ-fo2-oh3j1Gscfs2Mhf6XKcbRte1rTZy2HgmE4kz626Rn31N982JadOTPu0Dtk3sOIpAxGx6xT2htYk7rVEOkHpYwpx0pFGBRH6A5OnjQ6s2QU23A=w192-h144-s-no?authuser=0"
                                    )`
                                }}
                            ></div>
                            <div className="flip-card-back rounded-xl bg-zinc-900">
                                <a href="">
                                    <h2 className="text-white">My Works</h2>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flip-card my-btn p-0 w-36 h-36 rounded-xl overflow-hidden">
                        <div className="flip-card-inner-h">
                            <div
                                className="flip-card-front rounded-xl"
                                style={{
                                    backgroundImage: `url(
                                        "https://lh3.googleusercontent.com/pw/AJFCJaUjhMCXoHUHpFABDBGWML-7jYFrFB62scJbjy0hK6lDISifq_x8uuJMk98OaYvB3tqI94Ak-AeShksTtYLdQh26ucNtPd4l9Zhuhb_rSq4uhFzYJqSKRC1O4zfRMDJsMBbG_kyV0JUpGV7i_duX1KF-7tXFarOP8wdelDPwTH3mgXjnmKZHPUKf4b8but_yumbSQhklfVDCq5_s0RtllArL2qhl5ffUkQYQ98nzktl0g04AwgIiD2YrQgV4ZFmXlxeDDWaLeXvx8MJjttPM0Hh27F6N2nGzydstQFqNczEDrbzS6JIqmf7HTkju6GzSamtLcxHSRV92L0MBGnBRSne8Srsd3uQyPCsKQJx5SkVLnm_JpCWnGAhvd1xeSKvhZxxjtPL2anU45NcBLaEw5Np7rLFB8UG04nmWEolvIaCsu9IT1qIStDrZ4TxuHafVkdfFkQY0rR9vjDYU3NNj7e5OCVY-J0IFqhMc5h_zCu-N12HIGWn6KDj2AxxTeJG5VDC7MB3jy2UwNKB7L0SOJWHT4mG_cM7EdJAtzIl36_UI3nSSPazX-L9_KeWrXDF0Ljj6o-_cK9fodrfS_sZAYKAk-RgktAFKwsUNz5FzTjO_yBmjgXJEkihYdlmt80lgQkJkkjEhWbq2Vti1pOF95Faq6ysessfX3YOUJK6o2wLIBMdQ-sFaBrTVJ5yr4F_2gTZSbc1qB7bVOsV1bOjagmbILkshpj7L0VUQYgwo8v1pWmpr3pTZI7x3DtSvV7AfsCaZl8XgWS_3tnW93KHndMylUWUF-MIffG644oY0cY1zE_d73llfo7-4lMhaYtrlaUuiEjlYhiEokKTu2eue95xG33vzko8qIWBIzBkF2fZxpIQhfvrZ49-6OtKUdnhQvcQ2XccVwkfittzQnK609yvMM_dl7WHiTNNPbgio5Xivl5zA_GxYc-BNi2eeXQ=w144-h144-s-no?authuser=0"
                                    )`
                                }}
                            ></div>
                            <div className="flip-card-back rounded-xl bg-zinc-900">
                                <a
                                    href="https://dribbble.com/fajarksm"
                                    target="blank"
                                >
                                    <i className="fa-brands fa-dribbble fa-2xl text-white"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end: left side */}

                {/* middle */}
                <div className="flex flex-col items-end justify-start gap-4 ">
                    <div className="flip-card my-btn p-0 w-64 h-36 rounded-xl overflow-hidden">
                        <div className="flip-card-inner-v">
                            <div
                                className="flip-card-front rounded-xl"
                                style={{
                                    backgroundImage: `url(
                                        "https://lh3.googleusercontent.com/pw/AJFCJaW76srlcgtCdzmqgaQ3vnabHkJpr2pCnYiat7lBt_V7EJ4faAo0NoAXIC83I7da8luTbRCxNDrS0W3QXz6IXT26H8NAYHZZDq7wBGD2jByxZmorbDyDsSI5QFL2t4QJOPIb5hRBbamuLK8F_c5P2lACvTDU6LLAVp65GC3DSoenkw7A8JLHeAZTP6lFV-MPEghwD_Nwe_QBJY1Td0tk-MTwmI1oGfFP-Rj34ImmVX98q65EVWRixfHfHrAHq-oUUHo30MBlcrdwcYYHC3Bkt-sWrwzaBbkzvMy7lMa3dHv7nsrVmGBP6hCeOrug3Bqu_BH5DOio4vc5RAxL8pVQFPczlVOYX3BeJSZYShCUB166oZhZ-k6XHOFKFWV5gwNqB6Gb4c72YvAYTMtogyWWZaqW-xaXtMbKb5YOxdRZh5l7eFwtOt47q8TfJj4-gZJTcfnFn2LbeEg9vxn3UsnqfYXGjDG4_3kkghZ1cHYdbrgOTWCqJdGWPVl4c9om5j2Z-30Gdw3ufIod5xvlnDT-JkDLZehsGT79BYBILte8dQYo77S4QQwE_r53UeKfCvClc99dUGXsQVgsLCCgeMzRFurb6aUMAbIcl0_WRZt0-U3znJNVeW_Q8aUdkUig3IdlY-_TJgenjDZcLHXl5szyfP6ls1br0FMr-1CODAugiqjSj4kHCOkvJkaEspJcXI3rnlNiRdytO4uPbVagpFF6RPs5nKO0kCAfa9DOFLdIS1QRYlEIHN3nNt7oZAvI8XQ9pVLDxWMPpFk8RtwGlr-LE8otTrudWN_hUHrPi6lCq4XbABO4jRm3t7M9TGq22QxRWD2bHCZIQovOD93rLUH6r1GRz-ElBziG0ME4daNnKj7nwyDNaB27hL4fCDyr_vgpRoJrmNsvBKq4pmgwNH8g9gTVi5rPO_GHmAvBUTf1DdsMW55NAJ2CS1UiGUD_ew=w256-h144-s-no?authuser=0"
                                    )`
                                }}
                            ></div>
                            <div className="flip-card-back-v rounded-xl bg-zinc-900">
                                <a href="">
                                    <i className="fa-brands fa-github fa-2xl text-white"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flip-card my-btn p-0 w-64 h-64 rounded-xl overflow-hidden">
                        <div className="flip-card-inner-v">
                            <div
                                className="flip-card-front rounded-xl"
                                style={{
                                    backgroundImage: `url(
                                        "https://lh3.googleusercontent.com/pw/AJFCJaXPUOBEyzxYyVYIFm7HOYwb6myXy1QdpaywhpJpSi74lDNmmNfpyHbmOiGc8K1qqa3MzOQK6kpxdWbitWQr8vEg6OeAJrnprg8571PFSbiTC51SKfpi3bvVllqviL2nk3mtPKCeb1JrNeb8OrJFgKukTXK2sLxxrzhVyt2vQoRaVd77qwg7VZSaKb3hxsHaG5g7KxPO136y1IO0UdT8TFt7assF1TdSsNUzE_H8WyTiT5XQ00pd-ri2G4Hy7i7b3HteRJZ5J41TAs4aUzdcj-n78_vDJwSWXX24z_NFngt1m3XzUIybsTPvLqNPWBz915e2V0c_D82bgFWjJP8NNQBTWVqifYetiHGnpfWRkU5-7yRAIpA3uGW-jiupQBhxY4HBVFvCXiVthNYGTcO8q7mvmmMNHWCKksyOE_vhNjcTIGSPCaM6povnTV21qqVHwCBdNMuLISNctdXct1ZnvAun60OhN7WD-5egNbASXnhAQdtmxMlaavclT38UQi78pdU0nmwIWPRg9dfABKEHIw8df7Q2BIiDmHXw-sVTowu6cfeoDz89257zFyEsUFRnDmxAxNj-2AolcS4w_oaTiu3da8R5K-L8TJXWJfVLjSMJe-RcCAjLFAhNHPWPf69WIi0PiZRpPesXtqdPBdt6GfgWAE-rUaA1a_rMAnRRqrFf2eJis_JP0zH21YcXLSjNQKszk8qNriexUuZpCa58Su1rAkajN-L3gsVdhhYPsJQXnjCagjKeD9rlDKvyrJKNwwR6yPVR0qm1UzsH3sQ6cHJ-DQ3dHmgxSbKkxS5rGBdwpo_4UCae9SZVqjMS1buKit9pRdRn52yVhP4ei6wKW7ojVKhe69kH88s6jbe9SzizBeivV5NdQhljiyfJeE4Yhm0cCMplMgiUFAibYdVMugtajGiCn3UWLE7Rgjt2CWd7ZozEt4Eo6upndipXJQ=w256-h256-s-no?authuser=0"
                                    )`
                                }}
                            ></div>
                            <div className="flip-card-back-v rounded-xl bg-zinc-900">
                                <a href="">
                                    <i className="fa-brands fa-github fa-2xl text-white"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flip-card my-btn p-0 w-64 h-48 rounded-xl overflow-hidden">
                        <div className="flip-card-inner-v">
                            <div
                                className="flip-card-front rounded-xl"
                                style={{
                                    backgroundImage: `url(
                                        "https://lh3.googleusercontent.com/pw/AJFCJaUkzmNfve5COr44QozCYGZn-Vbyf8PG0FhAzzhXFw4WwW1x59S99pD-wcY6DGRPnaeYIFtpXEA6enMIEq4F1KZCLes41o7B3jZZ7Y7SH7AHJai6uYD1ATtZ7LlXf6amBxFEA6pA93kSqP7Hoz7JeQBymGS9eukwiD9wY69zpkeSytbymJs5XUwQ6UBUbIXCY6P82lxUqbYdNjommHvS2x8wOJ2Zxkg28COEntn6bMlyfNwvRNEwhYislIVLhxMoikMKDOoJjrHR-qO9iRZR5DdUgVhYBuBNrJRORyHEYKnW72_om8kP1veqOGJ59x_9dlhI7m0RqPb4epUOYRB3mLb_BvYUI9DmtiMu2Y5BSZ-A_5waRNYJLbbzSbxh7wNMxQKe-1dKXd2TSJNa9_QTGFKu4bocLHmpT_OsVyOtc2Ul6ggOsR7c3DkR3lFYJJXc7CXXgEXPwaw2xZMyOkR71w1cPdVN1NHjCStgEqukIqAkhKv2jH8V30dASQsGxBlevsybgXdjNy5JuWxxv4QC1YMwPjeYEoGmiYkah54ehtwKWhjukqIdo23pzazq1c-0Kw-IxR830Op8n8hh_4VDcnDtCKFQmCvuWTTx3IeYq2g_2Kb31pyn8gZ5hjgI-xODi9kZ1XexkPNDvuolpcuVGDk_uSrHNDTJA368Pl3LHTPLb58ct9VmpPZX6meaetIUzzoJFHJucH1Sb9sVdODiHDls6zXUtacd1btVR3WVk6s-yBGv11yXimI6lpJ25NrOmyuwuLXfdLkU3GpxRqUjUF5TJbkvB0kpJogEHr40TvafsbSzVaRi8AuuIsk3jX73IgjISjWCZxmBUUInXLh5T6XOfzh0Ur5R8sNPeZApip7z2-FbjsRvCk4lkhzUpDMajmavxqMvhzLxftOJyyt9I-xGbPN-9PZATL2lQsfmI-tL6hUpuB1SnOvz5MnyTA=w256-h192-s-no?authuser=0"
                                    )`
                                }}
                            ></div>
                            <div className="flip-card-back-v rounded-xl bg-zinc-900">
                                <a href="">
                                    <p className="text-2xl text-white">
                                        Let's Talk
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end : middle */}

                {/* right side */}
                <div className="flex flex-col items-start justify-start gap-4 ">
                    <div className="flip-card my-btn w-36 h-64 rounded-xl overflow-hidden">
                        <div className="flip-card-inner-h border-zinc-900">
                            <div
                                className="flip-card-front rounded-xl bg-cover bg-center"
                                style={{
                                    backgroundImage: `url(
                                        "https://lh3.googleusercontent.com/pw/AJFCJaX4oWCAi_GjoYEMzMmMFdorAp1RlkWhwJDR31N_hs4s2IIhs6i0ekdkwqbFIucpYxdA7cqpxdzyO4VkT1PWPUfMdbHOo1CxfNiALmQ5VtouzeevkWIOWV-mCH-TxEWoC_MRQLL3e-y3HqTn3tM6sqdqGr24eL7uKxE9Y3zcfea84dzW9fj5Lrdd8tAXMLFi7fa0nKW4QJqMBeAu548zDMRT2ye5OWASAn8FGqWdKRO5de04q7IM9ij1OkF5OUDLx-EsIsNWNv0mtNeF5v-jY1avrHFH9TPlxI36BGTirUG4lyJaYXySqlJDJlHyfygf23OXkJ6-nH4WwC5BC7t4GTtkHA50v8Flp0zuajRxhfnUM2Xm4oNYfxQUdEvmakbViM8s8QmIusE23hidRQp7LpbCjQryqSxMXEFlnb_5kryn3L_QKSkJuEUW0HxwnDUyccS48L1hJwJmG_3eUTCgS-4D2jisNWCuJZOLEKFm5DYdk9CuHwvK0MhFrvAJoRCdb_OBRc7mByboq5MMjJlhr12yvDpFYu3kdHk8oP4O1l6qq24XH7mgeaICG2wTs0nymRLPtPBQvV5ONMnYorCK7Mtqg7uFTQIJ4G9PqweJ1yDAjWLwPYSwcv055Yh_G-ie_EWo-BnB6NN8xWifi3eJ-DtFVkQ8JnfE4-gMRlIYv__5flyvwOx21LS06p85qEbN7rDgyLlxgqH2FBOAkGuOw5XB8krGP9M0EUqErqNoSJ51xRZ2y0nHqOZX1yr2_cC2MgrIyq4QxgKhEUW-5lYCmxNW6XhRyLmceia2kbPMl6wOVlJ0mh_Ui1helEkr5AAiNZXWxuhxjuX8EoXPmF5EPP5iUiug6UJEJ7-Riyp_aVzP-JOe3h1junYJUhgR-eeTjDJs8vIiG6l7O1UXuOqO76UzCd5KR27znEqS5EBL2LwG88-as-IK7yKWDjVWkA=w144-h256-s-no?authuser=0"
                                    )`
                                }}
                            ></div>
                            <div className="flip-card-back rounded-xl bg-zinc-900">
                                <a
                                    href="https://instagram.com/fajarksm?igshid=ZDc4ODBmNjlmNQ=="
                                    target="blank"
                                >
                                    <i className="fa-brands fa-instagram fa-2xl text-white"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flip-card my-btn w-48 h-24 rounded-xl overflow-hidden">
                        <div className="flip-card-inner-h border-zinc-900">
                            <div
                                className="flip-card-front rounded-xl"
                                style={{
                                    backgroundImage: `url(
                                        "https://lh3.googleusercontent.com/pw/AJFCJaUW6lwP-PKfVzofO5pPNYOHOnANNXY5Ai7Affkld1YwLZJqU-CBhoyhi22VFCdCA94RCa4zjs3tMVCDVhMT1AVzbfWCyT54JOpiKLfwyFqh_mc5PEUjqqVw1GLjlP4wcm53hqcGUyBBbvjrlwXpJyLEzZ735Pcp1fIiTLSKAHBVM-nF6fBrBb7f7INr9jEveakJTjIDz0VS1XQxc35DKm4SxS2f-HwjGCEMGjM9o8436qSvNogCFNIR-JQ6Gd6omCfoyvGe-Jw9gfmbXuaJDgXhH4Ty9btQciaQrlEZwobcCWXA85QpeozLrOLQwdpS0exb3bLpF4E74ImjF_EVogmQ801K9DjyD2TkiuBiiPZImWKhcXW6bHL6Itt2EccAC_pq_Z_Y83NxzbiIsq0iLKKjKW6E3Z_rlFZArDz_80aCiG0Z6JBXlKVimKbNdOmwsHAWYgg0SRg1dZYkVwBr3PdTJI72zrlUziklqLoe-KnFDUd_DxiJ8SciPXpWdYnI0EG2hZuXC0801AUCu5-qvwwXavRVWOc-Ilovi2CRCyi48PSDnXV2owYNfvz_9L5hBwz9qeDyO7aobzMECgOaNIeuM6VstiWL36ohUXKSk3tPwU4I0q0kVSUQI7gUHbXewFFz65rNZwKXj6twgqDwUoGrmnAoi_czYq-eBA6YUT6hoJf9-Bvf_WsJa8RY5iQI3oxFXqf2PiATBPnjtcMcWgbKwtxzvZutxz5XfEobVX8XUOaqxdHQN3-gbG8I5LRZ_K4wa_FiCRbxzeCjGLvodCfs8imY2PCfetc5NKFzkJyLRcQlH6o8N67Xkixhg8-YgA13VDNc6qtuIa44W94CHquT4pHESJpmGHcPoEWmiCOCnli2hiIuOl6atuv6TSEVdC-rF9UFIqtrZIxxgXxlVYwPmtA-pVUwwbrB_YZtyWJcHybhdI6reHqaTTOVZQ=w192-h96-s-no?authuser=0"
                                    )`
                                }}
                            ></div>
                            <div className="flip-card-back rounded-xl bg-zinc-900">
                                <a href="">
                                    <i className="fa-brands fa-instagram fa-2xl text-white"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flip-card my-btn w-24 h-24 rounded-xl overflow-hidden">
                        <div className="flip-card-inner-h border-zinc-900">
                            <div
                                className="flip-card-front rounded-xl"
                                style={{
                                    backgroundImage: `url(
                                        "https://lh3.googleusercontent.com/pw/AJFCJaX5sewSxQhjEdqlW5Wj3g5KqWHlsLUyUOd5Ft8kz2WskPxPikzgVzO97iI7ern7lxiOTL7_p63HhrtnIWGRAI2RGvWO-gApONAa_qJ5-mhAMa0K0lPF3JuGaossF65-L2_hRo4-9v7u9jIcXk916a1jhB0vKcQVCwDppHAee4UO8z5JQ6hCMkuhMD7w_oreERraspl-QhJ4WUS33b_rJVL-_mPdJZ4cGDPmwjUz92X7X1DJgHuTKubsI_DrZbKQtXgho5Wh3NOdCVmDoB8TGtMlg774n1zRfue5nL0e7KhjLy8e8H5ULtACiMwIOnCaA1wVQdpN3xRMlg_AxpDLOfQ9oaZqV7RutdhvEcLfTvUGb84NrGr4VA77n_xxCk8CKSwYlt7Hxn6zb__pHt1YgsMnAuv68k7unRIZuafZjZ9rMkVzGbTBsvsEKyzJP7QlR7KjfHV6mOZuD4UXErqtz9HAHIwberfCLsCx74aE21zUURpHMRDZxkBsX6IjWHBapo9fFC-NfBmkYq70IKkrXkN2g2TnHMTzQoGuOvakizEEp3p25kIKXkhEdJhCA6xCjOayfXBXyq2vNb2-jaRBbapIagsoyEnYvsIJTS56_10NVC8sqjnN-poEXrxc7nPywKYwP521S_Mj0tJivv47bXYK-YDqmaN40YGLwJXL9oPm_ambiXFxqiIDQgGJv_nIEZegEe-50gIq5ijXoILPdRDiu3kP1waoqBLTvqD91sFohcZ4YKwU64RLNEx5O6Ko5DFnL_UOenEc7wAsZrTGTn8F54K_8GKiaPxpr3-WcraGWbu7TSJ-DbcCstZx9jw8plxl3bUWEb7ZIP00uT1p7e4PUKq401nWV43umpjBeZrRl2kex5ZQXHdmAmNkyQ6-n_Z2iFnXDPKEYkoe39sQxA-smtlXK7pKqE38A78GfmUbJH88-gLXG2BKTA7VcQ=w96-h96-s-no?authuser=0"
                                    )`
                                }}
                            ></div>
                            <div className="flip-card-back rounded-xl bg-zinc-900">
                                <a
                                    href="https://instagram.com/fajarksm"
                                    target="blank"
                                >
                                    <i className="fa-brands fa-instagram fa-2xl text-white"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end : right side */}
            </div>
        </>
    );
};

export default Hero;
