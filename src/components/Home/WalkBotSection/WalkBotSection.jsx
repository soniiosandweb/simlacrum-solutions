import './WalkBotsection.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import walkBotLogo from '../../../assests/images/home/walkbot-logo.png';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import walkBotS from '../../../assests/images/home/walkbot-s.png';
import walkBotH from '../../../assests/images/home/walkbot-h.jpg';
import walkBotK from '../../../assests/images/home/walkbot-k.jpg';
import walkBotP from '../../../assests/images/home/walkbot-p.jpg';
import walkBotT from '../../../assests/images/home/walkbot-t.jpg';
import walkBotG from '../../../assests/images/home/walkbot-g.jpg';

const WalkBotSection = () => {

    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const Tabs = [
        {
            id: '1',
            title: 'WalkBot S (Standard Model)',
            content: 'In situ simulations are conducted in the actual clinical environment where healthcare providers work. These simulations help identify system issues, enhance team communication, and improve patient safety by practicing real-life scenarios in the real-world setting.',
            image: walkBotS,
            lists: [
                {
                    title: 'Adjustability',
                    text: 'Accommodates different patient heights and weights, ensuring a comfortable fit.',
                },
                {
                    title: 'Integrated Biofeedback System',
                    text: 'Provides real-time feedback to patients and therapists for improved outcomes.',
                },
                {
                    title: 'Performance Tracking',
                    text: 'Monitors progress and records data for evaluation and adjustment of training programs.',
                },
                {
                    title: 'Customizable Training Programs',
                    text: 'Tailors rehabilitation exercises to meet individual patient needs.',
                }
            ]
        },
        {
            id: '2',
            title: 'WalkBot K (Pediatric Model)',
            content: 'The WalkBot K is specially designed for pediatric patients. It features a smaller frame and a user-friendly interface to engage young patients in their rehabilitation process.',
            image: walkBotK,
            lists: [
                {
                    title: 'Child-Specific Design',
                    text: 'Smaller frame and components suitable for children.',
                },
                {
                    title: 'Engaging Interface',
                    text: 'Fun and interactive elements to keep children motivated.',
                },
                {
                    title: 'Safety Harness System',
                    text: 'Ensures the safety and comfort of pediatric patients during training.',
                },
                {
                    title: 'Pediatric Gait Patterns',
                    text: 'Adjusts gait training to match the specific needs of growing children.',
                }
            ]
        },
        {
            id: '3',
            title: 'WalkBot G (Geriatric Model)',
            content: 'The WalkBot G is designed to address the unique needs of elderly patients. It provides gentle and safe gait training to improve mobility and independence.',
            image: walkBotG,
            lists: [
                {
                    title: 'Gentle Gait Training',
                    text: 'Low-impact exercises to prevent strain and injury.',
                },
                {
                    title: 'Enhanced Safety Features',
                    text: 'Additional support and safety mechanisms for elderly users.',
                },
                {
                    title: 'Comfortable Harness System',
                    text: 'Designed for comfort and ease of use.',
                },
                {
                    title: 'Vital Signs Monitoring',
                    text: 'Tracks vital signs to ensure patient safety during rehabilitation.',
                }
            ]
        },
        {
            id: '4',
            title: 'WalkBot H (Home Use Model)',
            content: 'The WalkBot H is a compact and user-friendly model intended for home use. It allows patients to continue their rehabilitation in the comfort of their own home.',
            image: walkBotH,
            lists: [
                {
                    title: 'Easy Setup',
                    text: 'Simple to set up and operate without professional assistance.',
                },
                {
                    title: 'Remote Monitoring',
                    text: 'Allows healthcare providers to monitor progress remotely and make necessary adjustments.',
                },
                {
                    title: 'Portable Design',
                    text: 'Compact and lightweight for easy transportation and storage.',
                },
                {
                    title: 'Home Training Programs',
                    text: 'Customized programs tailored for home-based rehabilitation.',
                }
            ]
        },
        {
            id: '5',
            title: 'WalkBot T (Therapeutic Model)',
            content: 'The WalkBot T is an advanced model with enhanced therapeutic features, designed for intensive rehabilitation needs. It supports a comprehensive range of motion exercises and complex rehabilitation protocols.',
            image: walkBotT,
            lists: [
                {
                    title: 'Comprehensive Exercises',
                    text: 'Supports a wide range of motion and gait training exercises.',
                },
                {
                    title: 'Multi-Directional Training',
                    text: 'Facilitates multi-directional gait patterns to mimic real-life movements.',
                },
                {
                    title: 'Sensory Feedback',
                    text: 'Integrated sensory feedback to enhance the therapeutic experience.',
                },
                {
                    title: 'Complex Rehabilitation Support',
                    text: 'Suitable for patients with severe mobility impairments or complex rehabilitation needs.',
                }
            ]
        },
        {
            id: '6',
            title: 'WalkBot P (Performance Model)',
            content: 'The WalkBot P is a high-performance model aimed at athletes and individuals requiring advanced gait training. It offers features designed to optimize performance and recovery.',
            image: walkBotP,
            lists: [
                {
                    title: 'High-Intensity Training',
                    text: 'Programs designed for intensive training and performance enhancement.',
                },
                {
                    title: 'Detailed Analytics',
                    text: 'In-depth performance analytics to track and optimize progress.',
                },
                {
                    title: 'Adjustable Resistance Levels',
                    text: 'Customizable resistance to match the intensity of training required.',
                },
                {
                    title: 'Real-Time Biofeedback',
                    text: 'Provides immediate feedback to optimize training and improve results.',
                }
            ]
        }
    ]

    return(
        <section className="home-walkbot-section pb-10 px-3" id="walkbot">
            <div className='max-w-6xl mx-auto px-3 lg:px-10 py-10 bg-primary-bg text-center'>
                <LazyLoadImage
                    src={walkBotLogo}
                    alt='WalkBot'
                    className='mx-auto'
                />
                <p className='text-base md:text-lg opacity-60 my-10'>WalkBot is an advanced robotic rehabilitation system designed to assist in the recovery of patients with mobility impairments. It uses sophisticated technology to provide personalized and effective gait training. WalkBot systems are employed in various therapeutic settings, including hospitals, rehabilitation centers, and home care. Below are detailed descriptions of the different WalkBot models:</p>

                <div className='tabs-content-block'>                
                    <TabContext value={value}>
                        <Box className="pb-6">
                            <TabList onChange={handleChange} className="tablist-block grid grid-cols-3" aria-label="lab API tabs example">
                                {Tabs.map((item, i) => (
                                    <Tab label={item.title} value={item.id} key={i} className='w-full border border-primary-grey tabs-list-item' />
                                ))}
                            </TabList>
                        </Box>
                        {Tabs.map((item,i) => (
                            <TabPanel value={item.id} key={i} className='tabs-panel'>
                                <div className='flex flex-col md:flex-row gap-5 md:gap-10 items-center'>
                                    <div className='w-full md:w-1/3'>
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className='w-full object-cover object-center'
                                        />
                                    </div>
                                    <div className='w-full md:w-2/3 flex flex-col gap-5 text-left'>
                                        <h3 className="text-lg md:text-xl text-primary-darkBlue font-semibold">{item.title}</h3>
                                        <p className='text-base md:text-lg opacity-60'>{item.content}</p>
                                    </div>
                                </div>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 mt-10'>
                                    {item.lists.map((item,i) => (
                                        <div className='w-full flex flex-col gap-5 text-left' key={i}>
                                            <h4 className="w-max text-lg md:text-xl font-semibold text-primary-grey">{item.title}</h4>
                                            <p className='text-base md:text-lg opacity-60'>{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </TabPanel>
                        ))}
                    </TabContext>
                </div>
            </div>
        </section>
    )
}

export default WalkBotSection