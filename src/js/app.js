export default function healthLevel(item) {
    let level;
    if (item.health >= 50) {
        level = 'healthy';
    } else {
        if (item.health >= 15) {
            level = 'wounded';
        } else {
            level = 'critical';
        }
    }
    return level;
}
