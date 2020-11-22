import subprocess as sp

# for this to work, make sure to have
#  the tools xprop, xdotool, and wmctrl installed
#### apt-get install x11-utils (xprop)
#### sudo apt install xdotool
#### sudo apt install wmctrl

wid = None
xprop_out = sp.check_output(['xprop', '-root'], encoding='UTF-8')

for line in xprop_out.splitlines():
    if '_NET_ACTIVE_WINDOW(WINDOW)' in line:
        wid = line.split()[-1]
if wid:
    # open a new terminal tab after grabbing the window id
    # then run strapi develop
    sp.check_call(['xdotool', 'windowfocus', wid])
    sp.check_call(['xdotool', 'key', 'ctrl+shift+t', 'sleep' ,'2', 'type', 'cd ./api && yarn develop'])
    sp.check_call(['xdotool', 'sleep', '3', 'key', 'Return'])
    
    # breath
    sp.check_call(['xdotool', 'sleep','6'])

    # open up a firefox browser, then navigate to admin page 
    try:
        sp.check_call(['wmctrl', '-R', 'firefox'],)
    except:
        sp.check_call(['xdotool', 'key', 'ctrl+shift+t', 'sleep' ,'2', 'type', '/opt/firefox/firefox'])
        sp.check_call(['xdotool', 'sleep', '2', 'key', 'Return'])

    sp.check_call(['xdotool', 'sleep', '1', 'key',  '--clearmodifiers', 'ctrl+t', 'ctrl+l'])
    sp.check_call(['xdotool', 'sleep', '1', 'type', 'http://localhost:3000'])
    sp.check_call(['xdotool', 'sleep', '1', 'key', 'Return'])

    sp.check_call(['xdotool', 'sleep', '1', 'key',  '--clearmodifiers', 'ctrl+t', 'ctrl+l'])
    sp.check_call(['xdotool', 'sleep', '1', 'type', 'http://localhost:1337/dashboard'])
    sp.check_call(['xdotool', 'sleep', '1', 'key',  '--clearmodifiers', 'Tab','Return'])
    
    # breath
    sp.check_call(['xdotool', 'sleep', '2'])
    
    # if not logged in yet
    sp.check_call(['xdotool', 'sleep', '1', 'type', 'isiahfletcher7@gmail.com'])
    sp.check_call(['xdotool', 'sleep', '1', 'key',  '--clearmodifiers', 'Tab'])
    sp.check_call(['xdotool', 'sleep', '1', 'key', '--clearmodifiers','ctrl+a'])
    sp.check_call(['xdotool', 'sleep', '1', 'type', 'E@rthisac0mputer'])
    sp.check_call(['xdotool', 'sleep', '1', 'key', 'Tab', 'Return'])

else:
    print ('Failed to find window ID')