document.addEventListener('DOMContentLoaded', function() {
            const uploadBtn = document.getElementById('uploadBtn');
            const fileInput = document.getElementById('fileInput');
            const processSection = document.getElementById('processSection');
            const downloadSection = document.getElementById('downloadSection');
            const progressBar = document.getElementById('progressBar');
            const progressText = document.getElementById('progressText');
            const downloadBtn = document.getElementById('downloadBtn');
            
            // 模拟文件名和大小
            const sampleFiles = [
                { name: "商業報告.pdf", size: "12.4 MB" },
                { name: "技術文檔.pdf", size: "8.7 MB" },
                { name: "合約文件.pdf", size: "5.3 MB" },
                { name: "研究論文.pdf", size: "18.9 MB" }
            ];
            
            // 上传文件
            uploadBtn.addEventListener('click', () => {
                fileInput.click();
            });
            
            fileInput.addEventListener('change', function() {
                if (this.files && this.files[0]) {
                    const file = this.files[0];
                    
                    // 检查文件类型
                    if (file.type !== 'application/pdf') {
                        alert('請上傳PDF格式的文件');
                        return;
                    }
                    
                    // 检查文件大小
                    if (file.size > 100 * 1024 * 1024) {
                        alert('文件大小超過100MB限制');
                        return;
                    }
                    
                    // 显示处理区域
                    document.querySelector('.upload-section').style.display = 'none';
                    processSection.style.display = 'block';
                    
                    // 模拟处理过程
                    simulateProcessing(file);
                }
            });
            
            // 下载按钮事件
            downloadBtn.addEventListener('click', function() {
                // 模拟下载
                simulateDownload();
                
                // 显示消息
                this.innerHTML = '<i class="fas fa-check"></i> 已下載到您的iPhone';
                this.disabled = true;
                
                // 显示清理消息
                setTimeout(() => {
                    document.querySelector('.download-text p:last-child').innerHTML = 
                        '<i class="fas fa-trash-alt"></i> 所有暫存檔案和Cookie已清除';
                }, 2000);
            });
            
            // 模拟处理过程
            function simulateProcessing(file) {
                let progress = 0;
                const interval = setInterval(() => {
                    progress += Math.floor(Math.random() * 10) + 1;
                    if (progress >= 100) {
                        progress = 100;
                        clearInterval(interval);
                        
                        // 更新进度文本
                        progressText.textContent = "翻譯完成！正在準備下載...";
                        
                        // 显示下载区域
                        setTimeout(() => {
                            processSection.style.display = 'none';
                            downloadSection.style.display = 'block';
                            
                            // 设置文件信息
                            const randomFile = sampleFiles[Math.floor(Math.random() * sampleFiles.length)];
                            document.getElementById('fileName').textContent = 
                                randomFile.name.replace('.pdf', '_繁體中文版.pdf');
                            document.getElementById('fileSize').textContent = randomFile.size;
                        }, 1000);
                    }
                    
                    // 更新进度条
                    progressBar.style.width = progress + '%';
                    
                    // 更新进度文本
                    const steps = [
                        "正在分析PDF結構...",
                        "提取文本內容...",
                        "翻譯為繁體中文...",
                        "校對翻譯結果...",
                        "重建PDF格式...",
                        "優化文件大小..."
                    ];
                    
                    progressText.textContent = steps[Math.min(Math.floor(progress/17), steps.length-1)];
                    
                }, 300);
            }
            
            // 模拟下载
            function simulateDownload() {
                // 在真实环境中这里会触发文件下载
                // 对于演示，我们只是显示成功消息
                
                // 清理存储
                clearStorage();
            }
            
            // 清理存储
            function clearStorage() {
                // 在真实环境中，这里会向服务器发送请求清理文件
                // 以及清理客户端存储
                console.log("清理所有暂存文件和Cookie...");
                
                // 模拟清理
                setTimeout(() => {
                    alert('所有暫存檔案和Cookie已成功清除！');
                }, 1000);
            }
        });