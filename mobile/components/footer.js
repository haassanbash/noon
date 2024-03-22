import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import { Appbar, List, Divider } from 'react-native-paper';
const Footer = () => {

    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);
    return (<>
        <ScrollView>
            <View>
                <View style={styles.container}>
                    <Text style={styles.texthero}>We're Always Here To Help</Text>
                    <TouchableOpacity style={styles.container1}>
                        <View style={styles.cir}>
                            <Appbar.Action
                                icon="alert-circle-outline"
                                onPress={{}}
                                style={styles.icon1}


                            />
                        </View>

                        <View style={styles.container2}>
                            <Text style={styles.texthelp}>HELP CENTER</Text>
                            <Text style={styles.texthelp2}>Help.noon.Com</Text>
                        </View>

                    </TouchableOpacity>
                    <View style={styles.line} />
                    <TouchableOpacity style={styles.container1}>
                        <View style={styles.cir}>
                            <Appbar.Action
                                icon="email-outline"
                                onPress={{}}
                                style={styles.icon1}


                            />
                        </View>

                        <View style={styles.container2}>
                            <Text style={styles.texthelp}>EMAIL SUPPORT</Text>
                            <Text style={styles.texthelp2}>egypt@noon.com</Text>
                        </View>

                    </TouchableOpacity>
                    <View style={styles.line} />
                    <TouchableOpacity style={styles.container1}>
                        <View style={styles.cir}>
                            <Appbar.Action
                                icon="phone-outline"
                                onPress={{}}
                                style={styles.icon1}


                            />
                        </View>

                        <View style={styles.container2}>
                            <Text style={styles.texthelp}>PHONE SUPPORT</Text>
                            <Text style={styles.texthelp2}>16358</Text>
                        </View>

                    </TouchableOpacity>
                    <View style={styles.line} />
                </View>
                <View style={styles.line2} />
                <View>
                    <List.Section style={styles.list} >
                        <List.Accordion
                            title="Electronics"
                        >
                            <TouchableOpacity onPress={handlePress}>
                                <Text style={styles.linkText}>Mobiles</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handlePress}>
                                <Text style={styles.linkText}>Tablets</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handlePress}>
                                <Text style={styles.linkText}>Labtops</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handlePress}>
                                <Text style={styles.linkText}>Mobiles</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handlePress}>
                                <Text style={styles.linkText}>Tablets</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handlePress}>
                                <Text style={styles.linkText}>Labtops</Text>
                            </TouchableOpacity>

                        </List.Accordion>
                        <Divider />

                        <List.Accordion
                            title="Fashion"

                            onPress={handlePress}>
                            <TouchableOpacity onPress={handlePress}>
                                <Text style={styles.linkText}>Women's Fasion</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handlePress}>
                                <Text style={styles.linkText}>Men's Fashion</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handlePress}>
                                <Text style={styles.linkText}>Girle's Fashion</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handlePress}>
                                <Text style={styles.linkText}>Boy's Fashion</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handlePress}>
                                <Text style={styles.linkText}>Bag's & Luggage</Text>
                            </TouchableOpacity>

                        </List.Accordion>
                        <Divider />

                        <List.Accordion
                            title="Beauty"

                            onPress={handlePress}>
                            <TouchableOpacity onPress={handlePress}>
                                <Text style={styles.linkText}>Women's Frarance</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handlePress}>
                                <Text style={styles.linkText}>Men's Frarance</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handlePress}>
                                <Text style={styles.linkText}>Make-Up</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handlePress}>
                                <Text style={styles.linkText}>Skincare</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handlePress}>
                                <Text style={styles.linkText}>Tools & Accessories</Text>
                            </TouchableOpacity>

                        </List.Accordion>
                        <Divider />

                        <List.Accordion
                            title="Home & Kitchen"

                            onPress={handlePress}>
                            <TouchableOpacity onPress={handlePress}>
                                <Text style={styles.linkText}>Kitchen & Dining</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handlePress}>
                                <Text style={styles.linkText}>Bedding</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handlePress}>
                                <Text style={styles.linkText}>Bath</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handlePress}>
                                <Text style={styles.linkText}>Home Docor</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handlePress}>
                                <Text style={styles.linkText}>Home Application</Text>
                            </TouchableOpacity>

                        </List.Accordion>
                    </List.Section>

                </View>
                <View style={styles.line2} />
                <View style={styles.container3}>
                    <Text style={styles.texthero2}>SHOP ON THE GO</Text>
                    <View style={styles.container4}>
                        <svg width="84" height="26" viewBox="0 0 84 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="1" width="81.5786" height="24" rx="4" fill="black" stroke="#979797" />
                            <path d="M29.6552 7.14399C29.676 7.58873 29.5122 8.02247 29.202 8.34399C28.8554 8.70147 28.372 8.89565 27.8726 8.87799C27.37 8.88288 26.8867 8.68639 26.5319 8.33296C26.177 7.97952 25.9807 7.49898 25.9872 6.99999C25.9807 6.501 26.177 6.02046 26.5319 5.66703C26.8867 5.31359 27.37 5.1171 27.8726 5.12199C28.1281 5.12115 28.381 5.17219 28.6159 5.27199C28.8345 5.35956 29.0292 5.49733 29.1839 5.67399L28.8636 5.99199C28.6191 5.7032 28.252 5.54541 27.8726 5.56599C27.4923 5.56419 27.1275 5.71588 26.8621 5.98627C26.5966 6.25666 26.4531 6.62254 26.4646 6.99999C26.4565 7.57191 26.7957 8.0925 27.3245 8.31955C27.8532 8.5466 28.4676 8.43552 28.8817 8.03799C29.0677 7.83791 29.1749 7.57809 29.1839 7.30599H27.8726V6.87399H29.6311C29.6472 6.9631 29.6553 7.05346 29.6552 7.14399Z" fill="white" stroke="white" stroke-width="0.2" />
                            <path d="M32.4229 5.644H30.7913V6.784H32.2778V7.216H30.7913V8.356H32.4229V8.8H30.3079V5.2H32.4229V5.644Z" fill="white" stroke="white" stroke-width="0.2" />
                            <path d="M34.4049 8.8H33.9396V5.644H32.9244V5.2H35.4443V5.644H34.4049V8.8Z" fill="white" stroke="white" stroke-width="0.2" />
                            <path d="M37.2209 8.8V5.2H37.6862V8.8H37.2209Z" fill="white" stroke="white" stroke-width="0.2" />
                            <path d="M39.7528 8.8H39.2875V5.644H38.2723V5.2H40.762V5.644H39.7528V8.8Z" fill="white" stroke="white" stroke-width="0.2" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M42.2908 7C42.2798 7.49707 42.4716 7.97746 42.8226 8.332C43.558 9.05814 44.746 9.05814 45.4815 8.332C45.8325 7.97746 46.0243 7.49707 46.0132 7C46.0243 6.50294 45.8325 6.02255 45.4815 5.668C45.1298 5.31625 44.6512 5.11842 44.152 5.11842C43.6529 5.11842 43.1743 5.31625 42.8226 5.668C42.4716 6.02255 42.2798 6.50294 42.2908 7ZM45.137 8.032C44.5924 8.57054 43.7117 8.57054 43.1671 8.032C42.896 7.75723 42.7497 7.38443 42.7622 7C42.7433 6.61903 42.8806 6.24671 43.1429 5.968C43.6875 5.42946 44.5682 5.42946 45.1129 5.968C45.3928 6.23873 45.548 6.61204 45.5419 7C45.5544 7.38443 45.4081 7.75723 45.137 8.032Z" fill="white" />
                            <path d="M42.8226 8.332L42.7515 8.40237L42.7524 8.40316L42.8226 8.332ZM42.2908 7L42.3909 7.00223L42.3908 6.99778L42.2908 7ZM45.4815 8.332L45.5517 8.40317L45.5525 8.40236L45.4815 8.332ZM46.0132 7L45.9132 6.99778L45.9133 7.00223L46.0132 7ZM45.4815 5.668L45.5525 5.59764L45.5522 5.5973L45.4815 5.668ZM42.8226 5.668L42.7519 5.5973L42.7516 5.59765L42.8226 5.668ZM43.1671 8.032L43.0959 8.10224L43.0967 8.10311L43.1671 8.032ZM45.137 8.032L45.2073 8.10311L45.2082 8.10223L45.137 8.032ZM42.7622 7L42.8625 7.00325L42.8621 6.99504L42.7622 7ZM43.1429 5.968L43.0725 5.89684L43.0701 5.89947L43.1429 5.968ZM45.1129 5.968L45.0425 6.03911L45.0433 6.03988L45.1129 5.968ZM45.5419 7L45.4418 6.99843L45.442 7.00324L45.5419 7ZM42.8937 8.26165C42.5616 7.92629 42.3804 7.47207 42.3908 7.00223L42.1909 6.99778C42.1792 7.52206 42.3815 8.02862 42.7516 8.40236L42.8937 8.26165ZM45.4112 8.26085C44.7147 8.94853 43.5893 8.94853 42.8929 8.26085L42.7524 8.40316C43.5267 9.16775 44.7774 9.16775 45.5517 8.40316L45.4112 8.26085ZM45.9133 7.00223C45.9237 7.47207 45.7424 7.92629 45.4104 8.26165L45.5525 8.40236C45.9226 8.02862 46.1249 7.52206 46.1132 6.99778L45.9133 7.00223ZM45.4104 5.73836C45.7424 6.07371 45.9237 6.52794 45.9133 6.99778L46.1132 7.00223C46.1249 6.47794 45.9226 5.97139 45.5525 5.59765L45.4104 5.73836ZM44.152 5.21842C44.6248 5.21842 45.0779 5.40579 45.4108 5.73871L45.5522 5.5973C45.1817 5.22671 44.6777 5.01842 44.152 5.01842V5.21842ZM42.8933 5.73871C43.2262 5.40579 43.6793 5.21842 44.152 5.21842V5.01842C43.6264 5.01842 43.1224 5.22671 42.7519 5.5973L42.8933 5.73871ZM42.3908 6.99778C42.3804 6.52794 42.5616 6.07371 42.8937 5.73836L42.7516 5.59765C42.3815 5.97139 42.1792 6.47794 42.1909 7.00223L42.3908 6.99778ZM43.0967 8.10311C43.6804 8.68017 44.6237 8.68017 45.2073 8.10311L45.0667 7.96089C44.561 8.46091 43.7431 8.46091 43.2374 7.96089L43.0967 8.10311ZM42.6622 6.99676C42.6489 7.4087 42.8056 7.80802 43.0959 8.10223L43.2382 7.96177C42.9864 7.70643 42.8506 7.36017 42.8621 7.00324L42.6622 6.99676ZM43.0701 5.89947C42.7892 6.19791 42.6421 6.59673 42.6623 7.00496L42.8621 6.99504C42.8445 6.64133 42.972 6.29552 43.2157 6.03653L43.0701 5.89947ZM45.1832 5.89689C44.5996 5.31983 43.6562 5.31983 43.0726 5.89689L43.2132 6.03911C43.7189 5.53909 44.5369 5.53909 45.0425 6.03911L45.1832 5.89689ZM45.6419 7.00157C45.6484 6.58585 45.4821 6.18599 45.1824 5.89612L45.0433 6.03988C45.3035 6.29148 45.4476 6.63823 45.4419 6.99843L45.6419 7.00157ZM45.2082 8.10223C45.4985 7.80802 45.6552 7.4087 45.6419 6.99676L45.442 7.00324C45.4535 7.36017 45.3177 7.70643 45.0658 7.96177L45.2082 8.10223Z" fill="white" />
                            <path d="M46.6719 8.8V5.2H47.2399L49.0044 8.002V7.306V5.2H49.4697V8.8H48.9863L47.1372 5.866V6.562V8.8H46.6719Z" fill="white" stroke="white" stroke-width="0.2" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M29.9254 14.839V15.919H32.5359C32.495 16.4277 32.282 16.9077 31.9316 17.281C31.4035 17.8151 30.6726 18.1028 29.9193 18.073C28.3174 18.073 27.0188 16.7836 27.0188 15.193C27.0188 13.6024 28.3174 12.313 29.9193 12.313C30.6552 12.3011 31.3658 12.5794 31.8953 13.087L32.6628 12.325C31.9406 11.5989 30.9531 11.1942 29.9254 11.203C28.4624 11.1465 27.0855 11.8892 26.337 13.1386C25.5886 14.3881 25.5886 15.9439 26.337 17.1934C27.0855 18.4428 28.4624 19.1855 29.9254 19.129C30.9719 19.176 31.9876 18.7712 32.7111 18.019C33.3442 17.3284 33.6822 16.4205 33.6538 15.487C33.6558 15.2596 33.6355 15.0325 33.5934 14.809L29.9254 14.839ZM36.6269 14.053C35.2093 14.0563 34.0625 15.1995 34.0647 16.607C34.067 18.0145 35.2174 19.1541 36.635 19.153C38.0526 19.1519 39.2012 18.0106 39.2012 16.603C39.2111 15.9216 38.9421 15.2654 38.4556 14.7847C37.9692 14.304 37.3071 14.0399 36.6209 14.053H36.6269ZM39.6967 16.611C39.6922 15.2042 40.836 14.0596 42.2528 14.053C42.939 14.0399 43.6011 14.304 44.0876 14.7847C44.574 15.2654 44.8431 15.9216 44.8331 16.603C44.8331 18.0098 43.6857 19.1508 42.2689 19.153C40.8521 19.1552 39.7011 18.0177 39.6967 16.611ZM40.7373 17.2741C41.0132 17.8476 41.6142 18.1954 42.2528 18.151C42.6536 18.1418 43.0337 17.9722 43.3068 17.6807C43.5798 17.3892 43.7228 17.0006 43.7031 16.603C43.7015 15.9674 43.3088 15.3973 42.7128 15.1655C42.1167 14.9336 41.4385 15.087 41.0025 15.5524C40.5665 16.0178 40.4613 16.7005 40.7373 17.2741ZM35.1073 17.2787C35.3852 17.8518 35.988 18.1978 36.6269 18.151H36.6209C37.0217 18.1418 37.4017 17.9722 37.6748 17.6807C37.9479 17.3892 38.0908 17.0006 38.0711 16.603C38.0694 15.9669 37.6759 15.3966 37.0791 15.1652C36.4823 14.9339 35.8037 15.0886 35.3684 15.5552C34.933 16.0219 34.8294 16.7055 35.1073 17.2787ZM55.106 14.053C56.1078 14.0896 56.9829 14.7365 57.3056 15.679L57.4325 15.949L53.9941 17.359C54.2096 17.8463 54.7033 18.1533 55.2389 18.133C55.7561 18.1343 56.2358 17.8654 56.5019 17.425L57.3781 18.025C56.9011 18.7339 56.0975 19.1576 55.2389 19.153C54.5564 19.1629 53.8992 18.8969 53.4182 18.416C52.9373 17.935 52.674 17.2806 52.6888 16.603C52.6471 15.9409 52.8832 15.2912 53.3411 14.8081C53.799 14.3251 54.4378 14.0517 55.106 14.053ZM53.8007 16.531C53.776 16.1561 53.9042 15.7871 54.1566 15.5072C54.409 15.2272 54.7642 15.0599 55.1422 15.043C55.5407 15.0169 55.9163 15.2294 56.097 15.583L53.8007 16.531ZM52.1389 19.003H51.0089V11.503H52.1389V19.003ZM49.1598 14.623H49.1175C48.773 14.2406 48.2806 14.0223 47.7639 14.023C46.3922 14.089 45.3143 15.2125 45.3143 16.576C45.3143 17.9395 46.3922 19.063 47.7639 19.129C48.2823 19.1377 48.7779 18.918 49.1175 18.529H49.1537V18.895C49.1537 19.873 48.628 20.395 47.782 20.395C47.2057 20.3816 46.6947 20.0236 46.4888 19.489L45.5039 19.897C45.8832 20.8131 46.7845 21.4089 47.782 21.403C49.1054 21.403 50.1992 20.629 50.1992 18.745V14.203H49.1598V14.623ZM47.8647 18.1508L47.8666 18.151H47.8606L47.8647 18.1508ZM48.883 17.6697C48.6237 17.9611 48.2559 18.1348 47.8647 18.1508C47.0577 18.0793 46.4389 17.4078 46.4389 16.603C46.4389 15.7976 47.0586 15.1257 47.8666 15.055C48.2571 15.0749 48.6229 15.2505 48.8811 15.5419C49.1394 15.8333 49.2682 16.216 49.2383 16.603C49.2717 16.9918 49.1433 17.3773 48.883 17.6697ZM62.5991 11.503H59.8919V19.003H61.0219V16.159H62.5991C63.4769 16.2216 64.3165 15.7921 64.7746 15.046C65.2328 14.2999 65.2328 13.3621 64.7746 12.616C64.3165 11.8699 63.4769 11.4404 62.5991 11.503ZM61.0219 15.103H62.5991L62.6233 15.121C63.3391 15.121 63.9195 14.5448 63.9195 13.834C63.9195 13.1232 63.3391 12.547 62.6233 12.547H61.0219V15.103ZM69.5665 14.023C68.7258 13.9731 67.9354 14.4233 67.5542 15.169L68.5574 15.583C68.7594 15.2132 69.1623 14.9967 69.5846 15.031C69.8744 14.9974 70.1656 15.0808 70.3929 15.2624C70.6201 15.4441 70.7644 15.7088 70.7932 15.997V16.075C70.4303 15.8842 70.0255 15.7853 69.6149 15.787C68.5332 15.787 67.4394 16.387 67.4394 17.473C67.461 17.9408 67.6722 18.3801 68.0251 18.6909C68.3779 19.0017 68.8423 19.1575 69.3127 19.123C69.8924 19.1643 70.4485 18.8882 70.763 18.403H70.7993V19.003H71.887V16.117C71.887 14.803 70.8839 14.041 69.5967 14.041L69.5665 14.023ZM68.5453 17.497C68.5453 17.947 69.0589 18.133 69.4275 18.133L69.4577 18.151C70.1385 18.1345 70.703 17.6227 70.7811 16.951C70.4676 16.7772 70.1128 16.6902 69.7538 16.699C69.1858 16.699 68.5453 16.897 68.5453 17.497ZM75.8511 14.203L74.5579 17.455H74.5217L73.1801 14.203H71.9716L73.9838 18.751L72.8357 21.277H74.0141L77.108 14.203H75.8511ZM66.8231 19.003H65.693V11.503H66.8231V19.003Z" fill="white" />
                            <path d="M7.30875 5.52399C7.11613 5.76043 7.0211 6.06066 7.04287 6.36399V19.636C7.02447 19.9409 7.12388 20.2413 7.32084 20.476L7.36314 20.518L14.8382 13.09V12.916L7.35105 5.48199L7.30875 5.52399Z" fill="url(#paint0_linear)" />
                            <path d="M17.3157 15.568L14.8382 13.09V12.916L17.3157 10.432L17.3701 10.462L20.3372 12.136C21.1832 12.61 21.1832 13.39 20.3372 13.87L17.3822 15.538L17.3157 15.568Z" fill="url(#paint1_linear)" />
                            <path d="M17.3882 15.538L14.8381 13L7.30875 20.476C7.6645 20.7865 8.19247 20.8016 8.56566 20.512L17.3943 15.532" fill="url(#paint2_linear)" />
                            <path d="M17.3882 10.468L8.55962 5.488C8.18643 5.19836 7.65846 5.21348 7.3027 5.524L14.8381 13L17.3882 10.468Z" fill="url(#paint3_linear)" />
                            <path opacity="0.2" d="M17.3157 15.478L8.55962 20.428C8.2013 20.694 7.70936 20.694 7.35105 20.428L7.30875 20.47L7.35105 20.512C7.70869 20.78 8.20197 20.78 8.55962 20.512L17.3882 15.532L17.3157 15.478Z" fill="black" />
                            <path opacity="0.12" d="M7.30875 20.392C7.11179 20.1573 7.01238 19.8569 7.03077 19.552V19.642C7.01238 19.9469 7.11179 20.2473 7.30875 20.482L7.35105 20.44L7.30875 20.392Z" fill="black" />
                            <path opacity="0.12" d="M20.3371 13.78L17.3157 15.478L17.3701 15.532L20.3371 13.864C20.6798 13.7042 20.9103 13.3746 20.9414 13C20.8726 13.3389 20.6494 13.627 20.3371 13.78Z" fill="black" />
                            <path opacity="0.25" d="M8.5596 5.572L20.3371 12.22C20.6494 12.373 20.8725 12.6611 20.9414 13C20.9103 12.6254 20.6798 12.2958 20.3371 12.136L8.5596 5.488C7.71965 5.008 7.04285 5.404 7.04285 6.364V6.454C7.04285 5.494 7.71965 5.098 8.5596 5.572Z" fill="white" />
                            <defs>
                                <linearGradient id="paint0_linear" x1="11.5626" y1="-3.5494" x2="-0.412135" y2="-0.351133" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#00A0FF" />
                                    <stop offset="0.01" stop-color="#00A1FF" />
                                    <stop offset="0.26" stop-color="#00BEFF" />
                                    <stop offset="0.51" stop-color="#00D2FF" />
                                    <stop offset="0.76" stop-color="#00DFFF" />
                                    <stop offset="1" stop-color="#00E3FF" />
                                </linearGradient>
                                <linearGradient id="paint1_linear" x1="21.443" y1="6.87982" x2="6.82532" y2="6.87982" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FFE000" />
                                    <stop offset="0.41" stop-color="#FFBD00" />
                                    <stop offset="0.78" stop-color="#FFA500" />
                                    <stop offset="1" stop-color="#FF9C00" />
                                </linearGradient>
                                <linearGradient id="paint2_linear" x1="7.08751" y1="9.11652" x2="-2.44171" y2="25.2601" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FF3A44" />
                                    <stop offset="1" stop-color="#C31162" />
                                </linearGradient>
                                <linearGradient id="paint3_linear" x1="1.42906" y1="3.4576" x2="5.68245" y2="10.6665" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#32A071" />
                                    <stop offset="0.07" stop-color="#2DA771" />
                                    <stop offset="0.48" stop-color="#15CF74" />
                                    <stop offset="0.8" stop-color="#06E775" />
                                    <stop offset="1" stop-color="#00F076" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <Image
                            source={require('./../assets/Huawei-icon.png')}
                            style={styles.image}
                        />
                    </View>
                    <Text style={styles.texthero2}>CONNECT WITH US</Text>
                    <View style={styles.container4}>


                        <Appbar.Action
                            icon="facebook"
                            onPress={{}}
                            style={styles.icon}

                        />
                        <Appbar.Action
                            icon="instagram"
                            onPress={{}}
                            style={styles.icon}

                        />
                        <Appbar.Action
                            icon="linkedin"
                            onPress={{}}
                            style={styles.icon}

                        />
                        <Appbar.Action
                            icon="twitter"
                            onPress={{}}
                            style={styles.icon}

                        />

                    </View>
                    <Text style={styles.tRights}>2024 noon. All Rights Reserved</Text>
                    <View style={styles.container4}>
                        <Image
                            source={require('./../assets/card-mastercard.svg')}
                            style={styles.carts}

                        />
                        <Image
                            source={require('./../assets/card-visa.svg')}
                            style={styles.carts}

                        />
                        <Image
                            source={require('./../assets/valu_v2.svg')}
                            style={styles.carts}

                        />
                        <Image
                            source={require('./../assets/card-amex.svg')}
                            style={styles.carts}

                        />
                        <Image
                            source={require('./../assets/cod-en.svg')}
                            style={styles.carts}

                        />
                    </View>
                    <View style={styles.container4}>
                        <TouchableOpacity onPress={handlePress}>
                            <Text style={styles.linkText1}>Careers</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handlePress}>
                            <Text style={styles.linkText1}>Warranty Policy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handlePress}>
                            <Text style={styles.linkText1}>Sell with us</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.container4}>

                        <TouchableOpacity onPress={handlePress}>
                            <Text style={styles.linkText1}>Terms of Use</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handlePress}>
                            <Text style={styles.linkText1}>Privacy Policy</Text>
                        </TouchableOpacity>

                    </View>


                </View>
            </View>
        </ScrollView>
    </>)
}
const styles = StyleSheet.create({
    texthero: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20,
        marginTop: 10

    },
    texthero2: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 10

    },
    container: {
        textAlign: "center",
    },
    container1: {
        flexDirection: "row",
        textAlign: "center",
        marginLeft: "30%",
        marginTop: 16
    },
    texthelp: {
        color: "gray"
    },
    texthelp2: {
        fontWeight: "500",
        fontSize: 20
    },
    container2: {
        flexDirection: "column",
        marginLeft: 10

    },
    container3: {
        flexDirection: "column",
        marginLeft: 10,
        justifyContent: "center"

    },
    icon1: {
        justifyContent: "center"
    },
    line: {
        width: '50%',
        height: 1,
        backgroundColor: '#dcdcdc',
        marginTop: 10,
        marginLeft: "25%"
    },
    line2: {
        width: '100%',
        height: 10,
        backgroundColor: '#dcdcdc',
        marginTop: 10,

    },
    cir: {
        borderRadius: "50%",
        borderColor: "gray",
        borderWidth: 1,


        borderStyle: "solid",

    },
    linkText: {
        textDecorationLine: 'underline',
        marginLeft: 10,
        marginTop: 10
    },
    linkText1: {

        marginLeft: 30,
        marginTop: 10
    },
    list: {
        backgroundColor: "white"
    },
    image: {
        width: 94,
        height: 26,
        marginLeft: 10
    },
    icon: {
        marginLeft: 32,
        backgroundColor: "yellow",
        marginTop: 20
    },
    container4: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 16

    },
    tRights: {
        color: "#696969",
        fontSize: 16,
        textAlign: "center",
        marginTop: 10
    },
    carts: {
        marginLeft: 30
    }


});
export default Footer;