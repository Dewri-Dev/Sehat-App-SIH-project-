const fs = require('fs');
const path = require('path');

const dir = './frontend';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const footerReplacement = `
            <footer class="bg-[#f4f7f4] border-t border-[#c5e1e0] py-12 px-10">
                <div class="max-w-7xl mx-auto">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                        <div class="col-span-1 md:col-span-2">
                            <div class="flex items-center gap-4 mb-4">
                                <svg class="size-10" fill="#10847e" viewBox="0 0 24 24">
                                    <path d="M12,4c-4.41,0-8,3.59-8,8s3.59,8,8,8s8-3.59,8-8S16.41,4,12,4z M13,16h-2v-2h2V16z M13,12h-2V7h2V12z"></path>
                                </svg>
                                <h2 class="text-2xl font-bold text-[#10847e]">Sehat Sahayak</h2>
                            </div>
                            <p class="text-gray-600 mb-6 max-w-sm">Punjab's most trusted healthcare platform. We provide quality healthcare services at your fingertips.</p>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold mb-4">Quick Links</h3>
                            <ul class="space-y-2 text-gray-600">
                                <li><a href="homepage.html" class="hover:text-[#10847e]">Home</a></li>
                                <li><a href="Doctors.html" class="hover:text-[#10847e]">Find Doctors</a></li>
                                <li><a href="services.html" class="hover:text-[#10847e]">Services</a></li>
                                <li><a href="Health info.html" class="hover:text-[#10847e]">Health Hub</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold mb-4">Connect with Developer</h3>
                            <div class="flex gap-4">
                                <a href="https://github.com/Dewri-Dev" target="_blank" class="size-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-[#c5e1e0] hover:bg-[#e2f0ef] transition-colors">
                                    <svg class="size-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                </a>
                                <a href="https://www.linkedin.com/in/nayandewri/" target="_blank" class="size-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-[#c5e1e0] hover:bg-[#e2f0ef] transition-colors">
                                    <svg class="size-6" fill="#0077b5" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="border-t border-[#c5e1e0] pt-8 text-center">
                        <p class="text-gray-500 text-sm">© 2024 Sehat Sahayak. All rights reserved. Developed by Nayan Dewri.</p>
                    </div>
                </div>
            </footer>`;

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    const footerStart = content.indexOf('<footer');
    const footerEnd = content.indexOf('</footer>') + '</footer>'.length;
    if (footerStart !== -1 && footerEnd !== -1) {
        content = content.substring(0, footerStart) + footerReplacement + content.substring(footerEnd);
        fs.writeFileSync(filePath, content);
    }
});
console.log('Footers updated successfully');
