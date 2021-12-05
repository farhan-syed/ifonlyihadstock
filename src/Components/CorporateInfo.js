import React from 'react';

const CorporateInfo = (props) => {
    let ticker = props.match.params.ticker;
    return (
        <>
    <header class="text-gray-600 body-font font-main border-b-2">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                {/*
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                */}
                <span class="ml-3 text-xl">ifonlyihadstock</span>
            </a>
            <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                {/* <input className="h-7" type="text" placeholder="ticker"/>
                <button className="ml-2">Go</button> */}
            </nav>
            {/* <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Log Out
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </button> */}
        </div>
    </header>

    <section class="text-gray-600 body-font">
        <div class="container px-5 pt-16 mx-auto">
            <div class="flex flex-col text-center w-full mb-12">
                <h1 class="text-3xl font-medium title-font mb-4 text-gray-900">Apple Inc</h1>
                <h1 class="text-md font-medium title-font mb-4 text-gray-900">{ticker} $120.98</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, and online services. It is considered one of the Big Five companies in the U.S. information technology industry, along with Amazon, Google, Microsoft, and Facebook. Its hardware products include the iPhone smartphone, the iPad tablet computer, the Mac personal computer, the iPod portable media player, the Apple Watch smartwatch, the Apple TV digital media player, the AirPods wireless earbuds, the AirPods Max headphones, and the HomePod smart speaker line. Apple's software includes iOS, iPadOS, macOS, watchOS, and tvOS operating systems, the iTunes media player, the Safari web browser, the Shazam music identifier, and the iLife and iWork creativity and productivity suites, as well as professional applications like Final Cut Pro X, Logic Pro, and Xcode. Its online services include the iTunes Store, the iOS App Store, Mac App Store, Apple Arcade, Apple Music, Apple TV+, iMessage, and iCloud. Other services include Apple Store, Genius Bar, AppleCare, Apple Pay, Apple Pay Cash, and Apple Card. Apple was founded by Steve Jobs, Steve Wozniak, and Ronald Wayne in April 1976 to develop and sell Wozniak's Apple I personal computer, though Wayne sold his share back within 12 days. It was incorporated as Apple Computer, Inc., in January 1977, and sales of its computers, including the Apple I and Apple II, grew quickly.</p>
            </div>
        </div>
    </section>


<div className="flex justify-center font-main">
<table>
        <tr>
            <th className="pr-10">Market Cap</th>
            <td className="pl-10">2.2333 Trillion</td>
        </tr>
        <tr>
            <th className="pr-10">P/E Ratio</th>
            <td className="pl-10">34.9</td>
        </tr>
        <tr>
            <th className="pr-10">Price/Sales</th>
            <td className="pl-10">7.59</td>
        </tr>
        <tr>
            <th className="pr-10">Price to Book Value</th>
            <td className="pl-10">32.71</td>
        </tr>
        <tr>
            <th className="pr-10">Total Cash</th>
            <td className="pl-10">76.826 Billion</td>
        </tr>
        <tr>
            <th className="pr-10">BETA</th>
            <td className="pl-10">1.25044</td>
        </tr>
    </table>
</div>


  </>
    )
}

export default CorporateInfo;
