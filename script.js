Interceptor.attach(Process.findModuleByName("NotchNook").base.add(0xF3320),{
    onEnter(a) {
        console.log(`W8 -> ${this.context.x8}`)
        this.context.x8 = 0x1;
        }
});
